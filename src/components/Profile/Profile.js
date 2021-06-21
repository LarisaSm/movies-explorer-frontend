import './profile.css'

import React from "react";
import { Link } from "react-router-dom";

import Preloader from '../Preloader/Preloader'
import { useFormWithValidation } from '../Validate'
import CurrentUserContext from "../../contexts/CurrentUserContext";


function Profile({setIsShowOk, signOut, onUpdateUser, isLoading, setShowUserErrPopup})  {
  const [inputNameValue, setInputNameValue] = React.useState("");
  const [inputEmailValue, setInputEmailValue] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);
  const validate =  useFormWithValidation();

  const spanNameClass = `auth__input-error ${validate.errors.name ? 'auth__input-error_active' : ''} `
  const spanEmailClass = `auth__input-error ${validate.errors.email ? 'auth__input-error_active' : ''} `
  const nameValid=/[^0-9A-Zа-я\s-]/gi;
  
  
  function handleSubmit(e) {
    e.preventDefault();
    if(validate.isValid && validate.isNew) {
      onUpdateUser(inputNameValue, inputEmailValue);
      setIsShowOk(true);
      setShowUserErrPopup(true);
      validate.resetForm();
    }
    else return;
  }

  React.useEffect(() => {
    if (inputNameValue !== currentUser.name || inputEmailValue !== currentUser.email) {
      validate.setIsNew(true);
    }
    else {
      validate.setIsNew(false);
    }
  }, [inputNameValue, inputEmailValue])

  React.useEffect(() => {
    validate.resetForm();
  }, [])

  React.useEffect(() => {
    setInputEmailValue(currentUser.email);
    setInputNameValue(currentUser.name);
  }, [currentUser]);

  function handleNameChange(evt) {
    setInputNameValue(evt.target.value);
    validate.handleChange(evt);
    const simb = evt.target.value.match(nameValid);
    if (simb) {
      validate.setErrors({...validate.errors, name: `Недопустимо использование символов ${simb}` });
    }
  }

  function handleEmailChange(evt) {
    setInputEmailValue(evt.target.value);
    validate.handleChange(evt);
  }

  return (
    <section className="profileSection">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="profile__info">
        <div className="profile__infoBlock">
          <p className="profile__infoName">Имя</p>
          <input
          id="name-input"
          type="text"
          className={`profile__infoText  ${validate.errors.name ? 'input-error_active' : ''}`}
          autoComplete="off"
          placeholder="Имя"
          name="name"
          value={inputNameValue}
          onChange={handleNameChange}
          required
        />
          {/* <p className="profile__infoText">{userDataConst.name}</p> */}
        </div>
        <span id="name-input-error" className={spanNameClass}>{validate.errors.name}</span>

        <div className="profile__infoLine"></div>
        <div className="profile__infoBlock">
          <p className="profile__infoName">E-mail</p>
          <input
          id="email-input"
          type="email"
          className={`profile__infoText ${validate.errors.email ? 'input-error_active' : ''}`}
          autoComplete="off"
          placeholder="Е-мейл"
          name="email"
          value={inputEmailValue}
          onChange={handleEmailChange}
          required
        />
          {/* <p className="profile__infoText">{userDataConst.email}</p> */}
        </div>
        <span id="email-input-error" className={spanEmailClass}>{validate.errors.email}</span>

      </form>
      { isLoading ? <Preloader/> : ''}
      <Link to="/profile" className={`profile__editButton ${(!validate.isValid || !validate.isNew) ? 'profile__editButton_inactive' : '' }`} onClick={handleSubmit}>Редактировать</Link>
      <Link to="/sign-in" className="profile__exitButton" onClick={signOut}>Выйти из аккаунта</Link>

      
    </section>
  );
}

export default Profile;
