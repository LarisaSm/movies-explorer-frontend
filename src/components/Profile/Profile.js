import './profile.css'

import React from "react";
import { Link } from "react-router-dom";

import userDataConst from "../../utils/userDataConst"

function Profile()  {
  return (
    <section className="profileSection">
      <h1 className="profile__title">Привет, {userDataConst.name}!</h1>
      <div className="profile__info">
        <div className="profile__infoBlock">
          <p className="profile__infoName">Имя</p>
          <p className="profile__infoText">{userDataConst.name}</p>
        </div>
        <div className="profile__infoLine"></div>
        <div className="profile__infoBlock">
          <p className="profile__infoName">E-mail</p>
          <p className="profile__infoText">{userDataConst.email}</p>
        </div>
      </div>
      <Link to="/profile" className="profile__editButton">Редактировать</Link>
      <Link to="/sign-in" className="profile__exitButton">Выйти из аккаунта</Link>

      
    </section>
  );
}

export default Profile;
