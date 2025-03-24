import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroImg2 from "../../components/Hero/HeroImg2";
import IconGif from "../../asset/frogjump.gif";

const Contact = () => {
  return (
    <div>
      {/* add NAVBAR component*/}
      <Navbar />
      <HeroImg2
        heading="Contact"
        text="Get in touch with me"
        image={IconGif}
      />
    </div>
  );
};

export default Contact;
