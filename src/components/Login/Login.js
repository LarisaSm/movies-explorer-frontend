import './login.css';


import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import logo from "../../images/header__logo.svg";
import { Link, withRouter } from "react-router-dom";
import { useFormWithValidation } from '../Validate';


function Login({ onLogin, setShowUserErrPopup }) {
  const [inputEmailValue, setInputEmailValue] = React.useState("");
  const [inputPassValue, setInputPassValue] = React.useState("");

  const validate =  useFormWithValidation();

  const spanEmailClass = `auth__input-error ${validate.errors.email ? 'auth__input-error_active' : ''} `
  const spanPassClass = `auth__input-error ${validate.errors.pass ? 'auth__input-error_active' : ''} `
  
  React.useEffect(() => {
    setInputEmailValue("");
    setInputPassValue("");
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    if(validate.isValid) {

      onLogin(inputEmailValue, inputPassValue);
      setShowUserErrPopup(true);
      validate.resetForm();
    }
    else return;
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
    <section className="loginSection">
    <div className="login">
    <Link to="/"><img src={logo} alt="Лого" className="register__logo" /></Link>
    <AuthForm
      button="Войти"
      title="Рады видеть!"
      formId="auth"
      onSubmit={(e) => handleSubmit(e)}
      isValid={validate.isValid}
    >
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
