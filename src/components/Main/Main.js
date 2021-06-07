import React from "react";
import AboutProject from "./AboutProject/AboutProject"
import Promo from "./Promo/Promo"
import NavTab from "./NavTab/NavTab"
import Techs from "./Techs/Techs"
import AboutMe from "./AboutMe/AboutMe"
import Portfolio from "./Portfolio/Portfolio"



function Main()  {
  return (
    <main className="main page__main">
      <Promo />
      <NavTab />
     <AboutProject />
    <Techs />
    <AboutMe />
    <Portfolio />
    </main>
  );
}

export default Main;
