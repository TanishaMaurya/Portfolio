import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sony-pandikunta-7b47782ba"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Sony-2123" target="_blank">
        <FaGithub />
      </a>
      <a href="mailto:sonypandikunta21@gmail.com" target="_blank">
        <IoIosMail />
      </a>
    </div>
  );
};

export default HeaderSocials;
