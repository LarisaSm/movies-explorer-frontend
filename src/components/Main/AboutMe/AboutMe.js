import './aboutMe.css'
import React from "react";
import img from '../../../images/aboutMe.jpg'

function AboutMe()  {
  return (
    <section className="container container__padding aboutMeSection " id="student">
    <div className="container__minWidth aboutMe">
      <h2 className="title">Студент</h2>
      <div className="line"></div>
      <div className="aboutMe__info">
        <div className="aboutMe__text">
          <h3 className="aboutMe__title">Виталий</h3>
          <p className="aboutMe__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutMe__textAbout">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <div className="aboutMe__links">
            <a href="http://facebook.com" className="aboutMe__link" target="_blank">Facebook</a>
            <a href="http://github.com" className="aboutMe__link" target="_blank">GitHub</a>
          </div>
        </div>
        <img className="aboutMe__img" src={img} alt="Фото"></img>
      </div>
    </div>

    </section>
  );
}

export default AboutMe;
