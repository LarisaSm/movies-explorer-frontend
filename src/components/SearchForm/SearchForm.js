import './searchForm.css'

import React from "react";

function SearchForm({filterMovies, savedMovies, isFind, setIsFind, setErrorMessage, searchWord, searchCheck})  {
  const [inputNameValue, setInputNameValue] = React.useState("");
  const [inputShortValue, setInputShortValue] = React.useState("");

  function handleNameChange(evt) {
    setInputNameValue(evt.target.value);
  }
  function handleShortChange(evt) {
    // console.log("КОРОТКОМЕТРАЖКИ НАЖАЛИ!!!!");
    // console.log(evt.target.checked);
    setInputShortValue(evt.target.checked);
    filterMovies(inputNameValue, evt.target.checked);
    if(savedMovies) {
      localStorage.setItem("searchSaveCheck", evt.target.checked);
    }
    else {
      localStorage.setItem("searchCheck", evt.target.checked);
    }
  }
  React.useEffect(() => {
  // console.log(inputShortValue);
    if(searchWord) {
      setIsFind(true);
      setInputNameValue(searchWord);
      setInputShortValue(searchCheck);
      filterMovies(searchWord, searchCheck);
    }
    else {
      setInputShortValue(true);
    }
  }, [])
  
  function SearchMovies () {
    if(inputNameValue === '') {
    setIsFind(false);

      setErrorMessage("Нужно ввести ключевое слово");
      return
    }
    else {
    setIsFind(true);
    filterMovies(inputNameValue, inputShortValue);
      if(savedMovies) {
        localStorage.setItem("searchSaveWord", inputNameValue);
      localStorage.setItem("searchSaveCheck", inputShortValue);
      }
      else {
        localStorage.setItem("searchWord", inputNameValue);
      localStorage.setItem("searchCheck", inputShortValue);
      }
    }
}

  return (
<div className="movies__find">
          <div className="movies__inputBox">
            <input 
              className="movies__findInput" 
              placeholder="Фильмы"
              id="name-input"
              type="text"
              autoComplete="off"
              name="movie"
              minLength="2"
              maxLength="40"
              value={inputNameValue}
              onChange={(e) => handleNameChange(e)}
              required
            />
            <span id="movie-input-error" className="auth__input-error"></span>

            <button className="movies__findButton" onClick={SearchMovies}>Поиск</button>
          </div>
          <label className="movies__label" htmlFor="movies__checkbox">
            <input type="checkbox" className="movies__checkbox" defaultChecked={searchCheck} id="movies__checkbox" onChange={(e) => handleShortChange(e)}></input>
            <span class="movies__pseudo-item"></span>
            <span class="movies__label-text">Короткометражки</span>
          </label> 
            <div className="moviesLine"></div>
        </div>

);
}


export default SearchForm;