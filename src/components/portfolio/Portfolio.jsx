import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/portfolio1.jpg";
import Img2 from "../../assets/portfolio2.jpg";
import Img3 from "../../assets/portfolio3.jpg";


const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: Img1,
      title: "E-Commerce template",
      github: "https://github.com/Sony-2123/Ecommerce-webpage",
      demo: "https://sony-2123.github.io/Ecommerce-webpage/",
    },
    {
      id: 2,
      image: Img2,
      title: " Weather App",
      github: "https://github.com/Sony-2123/Whetherapp",
      demo: "https://sony-2123.github.io/Whetherapp/",
    },
    {
      id: 3,
      image: Img3,
      title: "Password Generator",
      github: "https://github.com/Sony-2123/Passwordgenerater",
      demo: "https://sony-2123.github.io/Passwordgenerater/",
    },
  ];

  return (
    <section id="portfolio">
      <h5 className="recentwork"> My Recent Work</h5>
      <h2>Project</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
