import './header.css'
import React from "react";
import logo from "../../images/header__logo.svg";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";


// function Header({ loggedIn, userData, signOut }) {
function Header() {

  // const match = useLocation();
  const currentUser = React.useContext(CurrentUserContext);

  const [isLogin, setIsLogin] = React.useState(localStorage.getItem("isLogin"));

  const [navMenuStatus, setNavMenuStatus] = React.useState(false);

  // const isLogin = localStorage.getItem("isLogin");
  // const loggedIn = false;
  // const userData = {email: 'www',};
  // const signOut = 'test';
 
  function openNavMenu () {
    // console.log("====open=======");
    setNavMenuStatus(true);
  }

console.log(currentUser.name);

React.useEffect(() => {
console.log(currentUser.name);

  if(currentUser.name) {
    setIsLogin(true);
  }
  else {
    setIsLogin(false);

  }
}, [currentUser.name])

  function closeNavMenu () {
    // console.log("====close=======");
    setNavMenuStatus(false);
  }

  

  function authorizationHeader (isMain) {
      const classNameHeader = isMain ? 'header page__header header__main-authorisation' : 'header page__header';
    return (
      <header className={classNameHeader}>
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
          { ( isLogin ) ? authorizationHeader(true) : (
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
          </header>)}
        </Route>
        <Route path="/movies">
          {authorizationHeader(false)}
        </Route>
        <Route path="/saved-movies">
          {authorizationHeader(false)}
        </Route>
        <Route path="/profile">
          {authorizationHeader(false)}
        </Route>


      </Switch>
   
  );
}

export default Header;
