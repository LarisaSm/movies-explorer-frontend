import './register.css';

import React from "react";
import logo from "../../images/header__logo.svg";
import { Link, withRouter } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import { useFormWithValidation } from '../Validate'


function Register({onRegister, setShowUserErrPopup})  {
  const [inputNameValue, setInputNameValue] = React.useState("");
  const [inputEmailValue, setInputEmailValue] = React.useState("");

  const [inputPassValue, setInputPassValue] = React.useState("");

  const validate =  useFormWithValidation();

  const nameValid=/[^0-9A-Zа-я\s-]/gi;


  const spanNameClass = `auth__input-error ${validate.errors.name ? 'auth__input-error_active' : ''} `
  const spanEmailClass = `auth__input-error ${validate.errors.email ? 'auth__input-error_active' : ''} `
  const spanPassClass = `auth__input-error ${validate.errors.pass ? 'auth__input-error_active' : ''} `
  
  function handleSubmit(e) {
    e.preventDefault();
    // console.log("=======REGISTER=======");

    if(validate.isValid) {
      onRegister(inputPassValue, inputEmailValue, inputNameValue);
      setShowUserErrPopup(true);
      validate.resetForm();
    }
    else return;
  }

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

  function handlePassChange(evt) {
    setInputPassValue(evt.target.value);
    validate.handleChange(evt);
  }

  return (
    <section className="registerSection">
      <div className="register">
      <Link to="/"><img src={logo} alt="Лого" className="register__logo" /></Link>
      <AuthForm
        button="Зарегистрироваться"
        title="Добро пожаловать!"
        formId="auth"
        onSubmit={(e) => handleSubmit(e)}
        isValid={validate.isValid}
      >
        <label className="register__label" htmlFor="name-input">Имя</label>
        <input
          id="name-input"
          type="text"
          className={`auth__input ${validate.errors.name ? 'input-error_active' : ''}`}
          autoComplete="off"
          placeholder="Имя"
          name="name"
          minLength="2"
          maxLength="200"
          value={inputNameValue}
          onChange={handleNameChange}
          required
        />
        <span id="name-input-error" className={spanNameClass}>{validate.errors.name}</span>

        <label className="register__label" htmlFor="email-input">E-mail</label>
        <input
          id="email-input"
          type="email"
          className={`auth__input ${validate.errors.email ? 'input-error_active' : ''}`}
          autoComplete="off"
          placeholder="Email"
          name="email"
          value={inputEmailValue}
          onChange={handleEmailChange}
          required
        />
        <span id="email-input-error" className={spanEmailClass}>{validate.errors.email}</span>

        <label className="register__label" htmlFor="pass-input">Пароль</label>
        <input
          id="pass-input"
          type="password"
          className={`auth__input ${validate.errors.pass ? 'input-error_active' : ''}`}
          autoComplete="new-password"
          placeholder="Пароль"
          name="pass"
          value={inputPassValue}
          minLength="2"
          maxLength="200"
          required
          onChange={handlePassChange}
        />
        <span id="pass-input-error" className={spanPassClass}>{validate.errors.pass}</span>
      </AuthForm>
      <p className="auth__register-text">
        Уже зарегистрированы?{" "}
        <Link className="auth__register-link" to="/sign-in">
          Войти
        </Link>
      </p>
      </div>
    </section>
  );
}

export default Register;
