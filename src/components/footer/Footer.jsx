import React from 'react'
import './footer.css'
import {MdOutlineEmail} from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"></a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">My Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
       <a href="https://www.linkedin.com/in/sony-pandikunta-7b47782ba"><FaLinkedin /></a>
       <a href="mailto:sonypandikunta21@gmail.com"><MdOutlineEmail/></a>
       
      </div>

      <div className="footer__copyright">
        <small>Copyright © 2024 Sony Pandikunta. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer