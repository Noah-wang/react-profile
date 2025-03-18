import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroImg2 from "../../components/Hero/HeroImg2";

const Contact = () => {
  return (
    <div>
      {/* add NAVBAR component*/}
      <Navbar/>
      <HeroImg2 heading="CONTACT." text="Get in touch with me"/>
    </div>
  );
};

export default Contact;
