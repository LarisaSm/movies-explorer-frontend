
import './moviesCardList.css'

import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from '../Preloader/Preloader'



function MoviesCardList({errorApiMessage, movies, savedMovies, isLoading, onMovieLike, onMovieDelete, setShowUserErrPopup})  {
  

// console.log("=======MoviesCardList======");

  return (
    <>
    {  }
{
  isLoading ? ( 
    <Preloader />
) : ( errorApiMessage ? <h1>{errorApiMessage}</h1> : 
   (movies.length === 0 ? (<h1 className="">Ничего не найдено</h1>) :
(
  <section className="elements movies__elements">
          {
            movies.map(({ country,
              director,
              duration,
              year,
              description,
              image,
              trailer,
              nameRU,
              nameEN,
              movie_Id,
              like,
              movieId, ownerId }) => {
              return (

                <MoviesCard
                  key={movie_Id}
                  like={like}
                  ownerId={ownerId}
                  country={country}
                  director={director}
                  duration={duration}
                  year={year}
                  description={description}
                  src={image}
                  trailer={trailer}
                  nameRU={nameRU}
                  nameEN={nameEN}
                  thumbnail={image}
                  movieId={movieId}
                  movie_Id={movie_Id}
                  savedMovies={savedMovies}
                  setShowUserErrPopup={setShowUserErrPopup}
                  // onCardClick={onCardClick}
                  onMovieLike={onMovieLike}
                  onMovieDelete={onMovieDelete}
                  // setConfirmOpen={setConfirmOpen}
                />
              );
            })
          
          }
        </section>
)))
}

</>


);
}

export default MoviesCardList;