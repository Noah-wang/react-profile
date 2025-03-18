import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import "./Earth.css";

import CanvasLoader from "./Loader";

const texture = "/earth_map.jpg";

// 地点配置
const LOCATIONS = {
  beijing: {
    name: "北京",
    coordinates: [39.9042, 116.4074],
    color: "#ff5555",
    rotationSpeed: 0.002
  },
  madison: {
    name: "麦迪逊",
    coordinates: [43.078972, -89.389557],
    color: "#55ff55",
    rotationSpeed: 0.0015
  },
  la: {
    name: "洛杉矶",
    coordinates: [34.069763, -118.445015],
    color: "#5555ff", 
    rotationSpeed: 0.001
  }
};

// 将经纬度转换为3D坐标
const latLongToVector3 = (lat, lng, radius) => {
  // 将经纬度转换为弧度
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  // 球坐标转为笛卡尔坐标
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
};

// 位置标记光柱组件
const LocationMarker = ({
  latitude = 0,
  longitude = 0,
  color = "#00ff00",
  height = 1,
  radius = 0.02, // 减小半径，使光柱更细
  glowIntensity = 1.5,
  animationSpeed = 0.02, // 稍微加快动画速度
  earthRadius = 2,
}) => {
  const markerRef = useRef();
  const glowRef = useRef();
  const pointRef = useRef();

  const position = latLongToVector3(latitude, longitude, earthRadius);
  const direction = position.clone().normalize();
  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

  useFrame((state) => {
    if (glowRef.current && pointRef.current) {
      // 更平滑的呼吸效果
      const pulseFactor =
        Math.sin(state.clock.elapsedTime * animationSpeed) * 0.2 + 0.8;
      glowRef.current.scale.set(pulseFactor * 1.5, 1, pulseFactor * 1.5);
      glowRef.current.material.opacity = 0.4 * pulseFactor;

      // 点的呼吸效果
      pointRef.current.scale.setScalar(pulseFactor * 1.2);
      pointRef.current.material.opacity = 0.8 * pulseFactor;
    }
  });

  return (
    <group position={position} quaternion={quaternion}>
      {/* 发光点 */}
      <mesh ref={pointRef}>
        <sphereGeometry args={[radius * 2, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 光柱主体 - 更细、更透明 */}
      <mesh ref={markerRef}>
        <cylinderGeometry args={[radius * 0.5, radius, height * 0.7, 16, 1]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 发光效果 - 更柔和 */}
      <mesh ref={glowRef}>
        <cylinderGeometry
          args={[radius * 1.5, radius * 2, height * 0.7, 16, 1]}
        />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 底部发光点 */}
      <mesh position={[0, -height * 0.35, 0]}>
        <sphereGeometry args={[radius * 2.5, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

// 创建一个简单的地球3D模型
const Earth = ({
  rotationSpeed = 0.002,
  textureOpacity = 1,
  metalness = 0.3,
  roughness = 0.5,
  normalScaleValue = 0.15,
  withLocationMarker = true,
  locationMarkerProps = {
    latitude: 39.9042,
    longitude: 116.4074,
    color: "#00ff00",
    height: 1.2,
  },
  customTexturePath = null,
}) => {
  const earthRef = useRef();
  const groupRef = useRef();
  const [textureLoaded, setTextureLoaded] = useState(false);
  const [earthTexture, setEarthTexture] = useState(null);

  // 加载纹理
  useEffect(() => {
    const texturePath = customTexturePath || texture;
    new THREE.TextureLoader().load(texturePath, (texture) => {
      console.log("纹理加载成功:", texturePath);
      enhanceTexture(texture);
      setEarthTexture(texture);
      setTextureLoaded(true);
    });
  }, [customTexturePath]);

  // 增强纹理质量
  const enhanceTexture = (texture) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.anisotropy = 16;
    texture.flipY = true;
    texture.needsUpdate = true;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.repeat.set(1, 1);
    texture.offset.set(0, 0);
  };

  // 添加旋转动画
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh
        ref={earthRef}
        castShadow
        receiveShadow
        rotation={[0, 0, 0]} // 重置旋转
      >
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          transparent={textureOpacity < 1}
          opacity={textureOpacity}
          metalness={metalness}
          roughness={roughness}
          normalScale={new THREE.Vector2(normalScaleValue, normalScaleValue)}
          envMapIntensity={0.4}
          color={textureLoaded ? "#dddddd" : "#2233aa"}
          onUpdate={(self) => {
            // 确保材质知道纹理已更新
            if (self.map) {
              console.log("材质纹理已应用");
              self.needsUpdate = true;
            }
          }}
        />
      </mesh>

      {/* 位置标记 */}
      {withLocationMarker && (
        <LocationMarker {...locationMarkerProps} earthRadius={2} />
      )}
    </group>
  );
};

// 参数化的 EarthCanvas 组件，根据 location 决定显示哪个位置
const EarthCanvas = ({
  location = "beijing", // 默认北京
  width = "100%",
  height = "500px",
  withLocationMarker = true,
  autoRotate = true,
  autoRotateSpeed = 0.5,
  enableZoom = false,
  minDistance = 4,
  maxDistance = 15,
  cameraPosition = [0, 0, 10],
  transparent = true,
  earthProps = {},
  customTexturePath = null,
}) => {
  // 获取位置数据，如果没有找到对应的位置，使用北京
  const locationData = LOCATIONS[location] || LOCATIONS.beijing;
  
  // 设置位置标记属性
  const locationMarkerProps = {
    latitude: locationData.coordinates[0],
    longitude: locationData.coordinates[1],
    color: locationData.color,
    height: 1.2,
  };

  // 合并地球属性
  const combinedEarthProps = {
    ...earthProps,
    rotationSpeed: locationData.rotationSpeed || 0.002,
    withLocationMarker,
    locationMarkerProps,
    customTexturePath,
  };

  return (
    <div className="earth-card">
      <div className="earth-container" style={{ width, height }}>
        <Canvas
          shadows
          frameloop="always"
          gl={{
            preserveDrawingBuffer: true,
            antialias: true,
            alpha: transparent,
            outputColorSpace: THREE.SRGBColorSpace,
          }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 1000,
            position: cameraPosition,
          }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate={autoRotate}
              autoRotateSpeed={autoRotateSpeed}
              enableZoom={enableZoom}
              maxDistance={maxDistance}
              minDistance={minDistance}
              maxPolarAngle={Math.PI}
              minPolarAngle={0}
            />
            <Earth {...combinedEarthProps} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default EarthCanvas;