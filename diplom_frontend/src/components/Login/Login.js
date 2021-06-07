import './login.css';


import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import logo from "../../images/header__logo.svg";
import { Link, withRouter } from "react-router-dom";

function Login({ onLogin }) {
  const [inputEmailValue, setInputEmailValue] = React.useState("");
  const [inputPassValue, setInputPassValue] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(inputEmailValue, inputPassValue);
    setInputEmailValue("");
    setInputPassValue("");
  }

  function handleEmailChange(evt) {
    setInputEmailValue(evt.target.value);
  }

  function handlePassChange(evt) {
    setInputPassValue(evt.target.value);
  }

  return (
    <section className="loginSection">
    <div className="login">
    <Link to="/"><img src={logo} alt="Лого" className="register__logo" /></Link>
    <AuthForm
      button="Войти"
      title="Рады видеть!"
      formId="auth"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label className="register__label" htmlFor="email-input">E-mail</label>
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

      <label className="register__label" htmlFor="pass-input">Пароль</label>
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
    Ещё не зарегистрированы?{" "}
        <Link className="auth__register-link" to="/sign-up">
        Регистрация
        </Link>
      </p>
    </div>
    </section>
  );
}

export default Login;
