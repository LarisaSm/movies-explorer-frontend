import './footer.css'
import React from "react";
import logo from "../../images/header__logo.svg";
import { Link, useLocation, NavLink, Route, Switch } from "react-router-dom";

// function Footer({ loggedIn, userData, signOut }) {
function Footer() {

  // const match = useLocation();

  const loggedIn = false;
  const userData = {email: 'www',};
  const signOut = 'test';

  function authorizationFooter () {
    return (
      <footer className="footerSection">
        <div className="footer">
          <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer__box">
            <p className="footer__copyright">&copy; 2020</p>
            <div className="footer__links">
              <a href="https://praktikum.yandex.ru/" className="footer__linkText" target="_blank">Яндекс.Практикум</a>
              <a href="https://github.com/" className="footer__linkText" target="_blank">Github</a>
              <a href="http://facebook.com" className="footer__linkText" target="_blank">Facebook</a>
            </div>
        </div>
        </div>
      </footer>
    )
  }

  return (
    
      <Switch>
        <Route exact path="/">
          {authorizationFooter}
        </Route>
        <Route path="/movies">
          {authorizationFooter}
        </Route>
        <Route path="/saved-movies">
          {authorizationFooter}
        </Route>
      </Switch>
   
  );
}

export default Footer;
