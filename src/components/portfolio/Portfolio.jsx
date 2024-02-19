import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/portfolio1.jpg";
import Img2 from "../../assets/portfolio2.jpg";
import Img3 from "../../assets/portfolio3.jpg";
import Img4 from '../../assets/portfolio4.jpg';

const Portfolio = () => {

  const data=[
    {
      id:1,
      image:Img1,
      title:"This is a Rayorpay",
      github:"https://github.com/TanishaMaurya/rayorpay",
      demo:"https://payment-site-12.netlify.app/"
    },
    {
      id:2,
      image:Img2,
      title:"This is a Weather App",
      github:"https://github.com/TanishaMaurya/Weather-App",
      demo:"https://6472074fcecdad7b4dd48c23--venerable-jelly-24a0d4.netlify.app/"
    },
    {
      id:3,
      image:Img3,
      title:"This is a Password Generator",
      github:"https://github.com/TanishaMaurya/password_generator?tab=readme-ov-file",
      demo:"https://generate-password-gp.netlify.app"
    },
     {
      id:4,
      image:Img4,
      title:"This is a Travel Advisor",
      github:"https://github.com/TanishaMaurya/Travel-Advisor",
      demo:"https://travel-advisor-cjcj.vercel.app/"
    },
    
  ]

  return (
    <section id="portfolio">
      <h5 className="recentwork"> My Recent Work</h5>
      <h2>Project</h2>
      <div className="container portfolio__container">
        {data.map(({id,image,title,github,demo})=>{
          return(
              <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
            )
        })}
      </div>
    </section>
  );
};

export default Portfolio;
