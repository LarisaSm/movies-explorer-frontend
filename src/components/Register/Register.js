import './register.css';

import React from "react";
import logo from "../../images/header__logo.svg";
import { Link, withRouter } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";


function Register()  {
  const [inputNameValue, setInputNameValue] = React.useState("");
  const [inputEmailValue, setInputEmailValue] = React.useState("");

  const [inputPassValue, setInputPassValue] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("=======REGISTER=======");
    // onRegister(inputPassValue, inputEmailValue);
  }

  function handleNameChange(evt) {
    setInputNameValue(evt.target.value);
  }

  function handleEmailChange(evt) {
    setInputEmailValue(evt.target.value);
  }

  function handlePassChange(evt) {
    setInputPassValue(evt.target.value);
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
      >
        <label className="register__label" for="name-input">Имя</label>
        <input
          id="name-input"
          type="text"
          className="auth__input"
          autoComplete="off"
          placeholder="Имя"
          name="name"
          value={inputNameValue}
          onChange={handleNameChange}
          required
        />
        <span id="name-input-error" className="auth__input-error"></span>

        <label className="register__label" for="email-input">E-mail</label>
        <input
          id="email-input"
          type="email"
          className="auth__input"
          autoComplete="off"
          placeholder="Email"
          name="email"
          value={inputEmailValue}
          onChange={handleEmailChange}
          required
        />
        <span id="email-input-error" className="auth__input-error"></span>

        <label className="register__label" for="pass-input">Пароль</label>
        <input
          id="pass-input"
          type="password"
          className="auth__input"
          autoComplete="new-password"
          placeholder="Пароль"
          name="pass"
          value={inputPassValue}
          minLength="2"
          maxLength="200"
          required
          onChange={handlePassChange}
        />
        <span id="pass-input-error" className="auth__input-error"></span>
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
