import React, { useState, useEffect } from "react";
import "./HeroImg2styles.css";

const HeroImg2 = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  // 预加载图片
  useEffect(() => {
    const img = new Image();
    img.src = props.image;
    img.onload = () => {
      setIsLoading(false);
      setImageLoaded(true);
    };
  }, [props.image]);

  return (
    <div className="hero-img">
      <div className="heading">
        <div className="clickable-image">
          {isLoading && <div className="image-loading">Loading...</div>}
          <img 
            src={props.image} 
            alt="hero" 
            onClick={props.onImageClick}
            style={{ 
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
            loading="eager"
          />
        </div>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default HeroImg2;
