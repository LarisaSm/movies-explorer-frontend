import './movies.css'

import React from "react";

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from'../MoviesCardList/MoviesCardList'
import movies from "../../utils/moviesConst"

function Movies()  {
  
  return (
    <section className="moviesSection">
      <div className="movies">
        <SearchForm />
        <MoviesCardList movies={movies} savedMovies={false}/>
        <button className="movies__buttonElse">Еще</button>
      </div>
    </section>
  );
}

export default Movies;
