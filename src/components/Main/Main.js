import React from "react";
import AboutProject from "./AboutProject/AboutProject"
import Promo from "./Promo/Promo"
import NavTab from "./NavTab/NavTab"
import Techs from "./Techs/Techs"
import AboutMe from "./AboutMe/AboutMe"
import Portfolio from "./Portfolio/Portfolio"
import CurrentUserContext from "../../contexts/CurrentUserContext";



function Main()  {

  const currentUser = React.useContext(CurrentUserContext);

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
