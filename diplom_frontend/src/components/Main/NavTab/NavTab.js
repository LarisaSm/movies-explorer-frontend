import './navTab.css';
import React from "react";

function NavTab()  {
  return (
    <nav className="navTab">
          <a href="#about" className="navTab__link">О проекте</a>
          <a href="#tech" className="navTab__link">Технологии</a>
          <a href="#student" className="navTab__link">Студент</a>
      </nav>
  );
}

export default NavTab;
