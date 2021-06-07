
import './moviesCardList.css'

import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({movies, savedMovies})  {
  
  return (
<section className="elements movies__elements">
          {
          // isLoading ? (
          //   <Spinner />
          // ) : (
            movies.map(({ cardId, src, nameImg, like, duration, ownerId }) => {
              return (
                <MoviesCard
                  key={cardId}
                  ownerId={ownerId}
                  src={src}
                  nameImg={nameImg}
                  like={like}
                  cardId={cardId}
                  duration={duration}
                  savedMovies={savedMovies}
                  // onCardClick={onCardClick}
                  // onCardLike={onCardLike}
                  // onCardDelete={onCardDelete}
                  // setConfirmOpen={setConfirmOpen}
                />
              );
            })
          // )
          }
        </section>

);
}

export default MoviesCardList;