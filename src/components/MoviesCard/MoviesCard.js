import './moviesCard.css'

import React from "react";
// import CurrentUserContext from "../contexts/CurrentUserContext";

function MoviesCard({
  movieId,
  src,
  nameImg,
  like,
  duration,
  savedMovies,
  onCardClick,
  onCardLike,
  onCardDelete,
  ownerId,
  setConfirmOpen,
}) {
  // const currentUser = React.useContext(CurrentUserContext);

  const currentUser ={
    _id: "123"
  }

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
    console.log("========IMG CLICK======");
  }

  function handleLikeClick() {
    console.log("========LIKE=======");
    // console.log(like);
    // onCardLike(like, movieId);
  }

  function handleDeleteClick() {
    // setConfirmOpen(true);
    // onCardDelete({
    //   ownerId: ownerId,
    //   cardId: cardId,
    // });
    console.log("========DELETE=======");

  }

  return (
    <div className="element">
      <img
        src={src}
        alt={nameImg}
        className="element__img"
        onClick={handleImgClick}
      />
      <div className="element__name">
        <h3 className="element__title">{nameImg}</h3>
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
      <p className="element__duration">{duration}</p>

    </div>
  );
}

export default MoviesCard;
