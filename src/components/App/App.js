// App.js
import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import PageNotFound from '../PageNotFound/PageNotFound'


function pageNotFound() {
  return (
    <h1>Страница не найдена</h1>
  )
}


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route><Route exact path="/sign-in">
          <Login />
        </Route><Route exact path="/sign-up">
          <Register />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;