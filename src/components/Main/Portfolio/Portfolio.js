import './portfolio.css'
import React from "react";
import linkImg from '../../../images/portfolio.svg'

function Portfolio()  {
  return (
    <section className="container portfolioSection">
      <div className="container__minWidth portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <div className="portfolio__links">
          <a href="https://15dev.students.nomoredomains.club/" className="portfolio__link" target="_blank">Статичный сайт</a>
          <img className="portfolio_linkImg" src={linkImg} alt="стрелочка"></img>
        </div>
        <div className="portfolio__linksLine"></div>
        <div className="portfolio__links">
          <a href="https://15dev.students.nomoredomains.club/" className="portfolio__link" target="_blank">Адаптивный сайт</a>
          <img className="portfolio_linkImg" src={linkImg} alt="стрелочка"></img>
        </div>
        <div className="portfolio__linksLine"></div>
        <div className="portfolio__links">
          <a href="https://15dev.students.nomoredomains.club/" className="portfolio__link" target="_blank">Одностраничное приложение</a>
          <img className="portfolio_linkImg" src={linkImg} alt="стрелочка"></img>
        </div>
      </div>
   </section>

  );
}


export default Portfolio;
