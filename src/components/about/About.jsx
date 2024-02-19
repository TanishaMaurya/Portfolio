import React from "react";
import "./about.css";
import MeAbout from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5 className="getabout">Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MeAbout} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              {/* <small>3+ Years Working</small> */}
            </article>
            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              {/* <small>80+ Completed</small> */}
            </article>
          </div>
          <p>
              Hi, I'm Tanisha Maurya, currently in my penultimate year studying for my B.TECH at
               KIET Group of Institutions in Ghaziabad.Outside of my academic and professional endeavors, I derive satisfaction from solving problems. Currently, I am immersing myself in the vast field of web development, covering both frontend and backend aspects. Being proactive and organized, I adeptly handle my responsibilities, utilizing tools such as Google Calendar and Microsoft TODO to ensure timely completion and high-quality outcomes        </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
