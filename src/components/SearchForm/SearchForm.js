import './searchForm.css'

import React from "react";


function SearchForm()  {
  
  return (
<div className="movies__find">
          <div className="movies__inputBox">
            <input className="movies__findInput" placeholder="Фильмы" required></input>
            <button className="movies__findButton">Поиск</button>
          </div>
          <label className="movies__label" for="movies__checkbox">
            <input type="checkbox" className="movies__checkbox" id="movies__checkbox"></input>
            <span class="movies__pseudo-item"></span>
            <span class="movies__label-text">Короткометражки</span>
          </label> 
            <div className="moviesLine"></div>
        </div>

);
}

export default SearchForm;