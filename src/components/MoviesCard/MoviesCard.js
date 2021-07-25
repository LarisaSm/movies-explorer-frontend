import './moviesCard.css'

import React from "react";
// import CurrentUserContext from "../contexts/CurrentUserContext";

function MoviesCard({
  country,
  director,
  duration,
  year,
  description,
  src,
  trailer,
  nameRU,
  nameEN,
  thumbnail,
  movieId,
  movie_Id,
  like,
  savedMovies,
  setShowUserErrPopup,
  onCardClick,
  onMovieLike,
  onMovieDelete,
  ownerId,
  setConfirmOpen,
}) {
  // const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  // const isOwn = ownerId === currentUser._id;
const isOwn = true;
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `element__trash ${
    isOwn ? " " : "element__trash_invisible"
  }`;



  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  // const isLiked = like.some((i) => i === currentUser._id);


  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  // const cardLikeButtonClassName = `element__like ${
  //   isLiked ? "element__like_type_active" : " "
  // }`;

  const cardLikeButtonClassName = `element__like ${
    like ? "element__like_type_active" : " "
  }`;

  function handleImgClick() {
    // onCardClick({ src, nameImg });
    // console.log("========IMG CLICK======");
    window.open(trailer, '_blank');
  }

  function handleLikeClick() {
    // console.log("========LIKE=======");
    // console.log(country);
    // console.log(director);
    // console.log(duration);
    // console.log(year);
    // console.log(description);
    // console.log(src);
    // console.log(trailer);
    // console.log(nameRU);
    // console.log(nameEN);
    // console.log(thumbnail);
    // console.log(movieId);

  // console.log(movie_Id);
  setShowUserErrPopup(true);
    onMovieLike({country,
      director,
      duration,
      year,
      description,
      src,
      like,
      trailer,
      nameRU,
      nameEN,
      thumbnail,
      movie_Id,
      movieId});
  }

  const durationHours = Math.floor(duration / 60);
  const durationMinuts = duration - durationHours*60;

  function handleDeleteClick() {
    // setConfirmOpen(true);
    // onCardDelete({
    //   ownerId: ownerId,
    //   cardId: cardId,
    // });movie_Id

    setShowUserErrPopup(true);
    onMovieDelete(movie_Id);
  }

  return (
    <div className="element">
          <img      
          src={src}
          alt={nameRU}
          className="element__img"
          onClick={handleImgClick}
          /> 

     
      <div className="element__name">
        <h3 className="element__title">{nameRU}</h3>
        {!savedMovies ? 
          <button
          className={cardLikeButtonClassName}
          type="button"
          onClick={handleLikeClick}
        ></button>
        :
        <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      ></button>
        }
        
      </div>
      <p className="element__duration">{durationHours !== 0 ? `${durationHours}ч ${durationMinuts}м` : `${durationMinuts}м`}</p>

    </div>
  );
}

export default MoviesCard;
