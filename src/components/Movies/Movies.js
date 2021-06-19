import './movies.css'

import React from "react";

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from'../MoviesCardList/MoviesCardList'
// import movies from "../../utils/moviesConst"



function Movies({errorApiMessage, viewMovies, findMovies, movies, isLoading, filterMovies, onMovieLike, handleAddViewMovies, setIsFind, isFind, setShowUserErrPopup})  {  
  const [errorMessage, setErrorMessage] = React.useState("");

  const searchWord = localStorage.getItem("searchWord");
  let searchCheck;
  if (localStorage.getItem("searchCheck") === 'false') {
    searchCheck = false;
  }
  else {
    searchCheck = true;

  }


  // React.useEffect(() => {
  //   // console.log(viewMovies);
  //   console.log(isFind);
  //   if(findMovies.length === 0) {
  //     setIsFind(false);
  //   }
  //   else setIsFind(true);
  // },[findMovies])


  return (
    <section className="moviesSection">
      <div className="movies">
        <SearchForm searchWord={searchWord} searchCheck={searchCheck} savedMovies={false} isFind={isFind} setIsFind={setIsFind} filterMovies={filterMovies} setErrorMessage={setErrorMessage}/>
        {(isFind === false && errorMessage) ? <h1>{errorMessage}</h1> : ''}
        { isFind === false ? 
        '':
        <MoviesCardList errorApiMessage={errorApiMessage} movies={viewMovies} findMovies={findMovies} savedMovies={false} isLoading={isLoading} onMovieLike={onMovieLike} setShowUserErrPopup={setShowUserErrPopup}/>}
          { isFind !== false && viewMovies.length !== movies.length ?
            <button className="movies__buttonElse" onClick={handleAddViewMovies}>Еще</button> : '' 
        }
      </div>
    </section>
  );
}

export default Movies;
