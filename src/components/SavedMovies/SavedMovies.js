import './savedMovies.css'
import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from'../MoviesCardList/MoviesCardList'
import CurrentUserContext from "../../contexts/CurrentUserContext";



function SavedMovies({savedMovies, onMovieDelete, filterSavedMovies, isFind, setIsFind, setShowUserErrPopup})  {
  const [errorMessage, setErrorMessage] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  const searchWord = localStorage.getItem("searchSaveWord");
  let searchCheck;
  if (localStorage.getItem("searchSaveCheck") === 'false') {
    searchCheck = false;
  }
  else {
    searchCheck = true;
  }
// console.log(savedMovies);
// console.log("_____________________");

  return (
    <section className="savedMoviesSection">
      <div className="savedMovies">
      <SearchForm searchWord={searchWord} searchCheck={searchCheck} isFind={isFind} savedMovies={true} setIsFind={setIsFind} filterMovies={filterSavedMovies} setErrorMessage={setErrorMessage} />
      {(isFind === false && errorMessage) ? <h1>{errorMessage}</h1> : ''}
      { isFind === false ? 
        '':
        <MoviesCardList setShowUserErrPopup={setShowUserErrPopup} movies={savedMovies} savedMovies={true} onMovieDelete={onMovieDelete}/>
      }
      </div>
    </section>
  );
}

export default SavedMovies;
