import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io';
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tanisha-maurya-5769a4231/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/TanishaMaurya" target="_blank"><FaGithub/></a>
        <a href="mailto:12tanishamaurya@gmail.com" target="_blank"><IoIosMail/></a>
    </div>
  )
}

export default HeaderSocials