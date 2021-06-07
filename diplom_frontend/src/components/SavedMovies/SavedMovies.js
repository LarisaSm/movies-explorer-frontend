import './savedMovies.css'
import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from'../MoviesCardList/MoviesCardList'
import savedMovies from '../../utils/savedMoviesConst'




function SavedMovies()  {
  return (
    <section className="savedMoviesSection">
      <div className="savedMovies">
        <SearchForm />
        <MoviesCardList movies={savedMovies} savedMovies={true}/>

      </div>
    </section>
  );
}

export default SavedMovies;
