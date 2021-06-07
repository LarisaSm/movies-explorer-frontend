import './promo.css'
import React from "react";
import logo from "../../../images/promo.svg";


function Promo()  {
  return (
    <div className="promo">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__img" alt="Промо" src={logo}></img>
    </div>
  );
}

export default Promo;




