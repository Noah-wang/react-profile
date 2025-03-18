import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroImg from "../../components/Hero/HeroImg";

const Home = () => {
  return (
    <div>
      {/* add NAVBAR component*/}
      <Navbar />
      
      {/* add HEROIMG component*/}
      <HeroImg/>

    </div>
  );
};

export default Home;
