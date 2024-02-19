import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <h5 className="head1">Hello I'm </h5>
        <h1 className="username">Tanisha Maurya</h1>
        <h5 className="text__light">Fullstack Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="my image" className="mephoto" />
        </div>

       
      </div>
    </header>
  );
};

export default Header;
