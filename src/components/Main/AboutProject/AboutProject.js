import './aboutProject.css'
import React from "react";

function AboutProject()  {
  return (
    <section className="container container__padding aboutProjectSection" id="about">
    <div className="container__minWidth aboutProject">
      <h2 className="title">О проекте</h2>
      <div className="line"></div>
      <div className="aboutProject__container">
        <div className="aboutProject__column">
          <h3 className="aboutProject__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutProject__column">
          <h3 className="aboutProject__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        
      </div>
      <div className="aboutProject__progress">
          <p className="aboutProject__weeks aboutProject__weeks_one">1 неделя</p>
          <p className="aboutProject__weeks">4 недели</p>
          <p className="aboutProject__weeksNames">Back-end</p>
          <p className="aboutProject__weeksNames">Front-end</p>
        </div>
    </div>
    </section>
  );
}

export default AboutProject;



