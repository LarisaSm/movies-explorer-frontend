import './header.css'
import React from "react";
import logo from "../../images/header__logo.svg";
import { Link, useLocation, NavLink, Route, Switch } from "react-router-dom";

// function Header({ loggedIn, userData, signOut }) {
function Header() {

  // const match = useLocation();

  const [navMenuStatus, setNavMenuStatus] = React.useState(false);

  const loggedIn = false;
  const userData = {email: 'www',};
  const signOut = 'test';


  function openNavMenu () {
    console.log("====open=======");
    setNavMenuStatus(true);
  }

  function closeNavMenu () {
    console.log("====close=======");
    setNavMenuStatus(false);
  }

  

  function authorizationHeader () {
    return (
      <header className="header page__header">
        <div className="maxHeaderNav">
        <Link to="/"><img src={logo} alt="Лого" className="header__logo" /></Link>
          <nav className="header__mainnav">
            <NavLink to="/movies" className="header__navLink" activeClassName="header__navLink_active">
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="header__navLink" activeClassName="header__navLink_active">
              Сохраненные фильмы
            </NavLink>
          </nav>
          <Link to="/profile" className="header__navButton">
            Аккаунт
          </Link>
        </div>
        <div className='minHeaderNav'>
          <div className={`navSectionPopup ${navMenuStatus && "navSectionPopup-opened"}`}></div>
        <Link to="/"><img src={logo} alt="Лого" className="header__logo" /></Link>

            <button className="header__openMenu" onClick={openNavMenu}></button>
            <div className={`navSection ${navMenuStatus && "navSection-opened"}`}>
              <NavLink exact to="/" className="header__minNavLink header__minNavLink__marginFirst" activeClassName="header__minNavLink_active">
                Главная
              </NavLink>
                <NavLink to="/movies" className="header__minNavLink" activeClassName="header__minNavLink_active">
                Фильмы
              </NavLink>
              <NavLink to="/saved-movies" className="header__minNavLink" activeClassName="header__minNavLink_active">
                Сохраненные фильмы
              </NavLink>
              <Link to="/profile" className="header__minNavButton">
                Аккаунт
              </Link>
              <button className="header__minNavClose" onClick={closeNavMenu}></button>
            </div>
        </div>
      </header>
    )
  }

  return (
    
      <Switch>
        <Route exact path="/">
          <header className="header page__header header_about">
            <div className="header__main">
            <Link to="/"><img src={logo} alt="Лого" className="header__logo" /></Link>
            {/* {switchButton(match.pathname)} */}
            <div className="header__authorization">
              <Link to="sign-up" className="header__link">
                Регистрация
              </Link>
              <Link to="sign-in" className="header__button">
                Войти
              </Link>
            </div>
            </div>
          </header>
        </Route>
        <Route path="/movies">
          {authorizationHeader}
        </Route>
        <Route path="/saved-movies">
          {authorizationHeader}
        </Route>
        <Route path="/profile">
          {authorizationHeader}
        </Route>


      </Switch>
   
  );
}

export default Header;
