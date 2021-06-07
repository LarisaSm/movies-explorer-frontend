import './techs.css'
import React from "react";


function Techs()  {
  return (
    <section className="container container__padding techsSection" id="tech">
      <div className="container__minWidth techs">
        <h2 className="title">Технологии</h2>
        <div className="line"></div>
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="techs__buttonsContainer">
          <p className="techs__buttons">HTML</p>
          <p className="techs__buttons">CSS</p>
          <p className="techs__buttons">JS</p>
          <p className="techs__buttons">React</p>
          <p className="techs__buttons">Git</p>
          <p className="techs__buttons">Express.js</p>
          <p className="techs__buttons">mongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Techs;
