import './authForm.css';

import React from "react";


function AuthForm({ button, title, formId, children, onSubmit, isValid }) {

  return (
    <div className="auth">
      <h2 className="auth__title">{title}</h2>
      <form
        className={`form ${formId}`}
        name="auth__form"
        onSubmit={onSubmit}
        noValidate
      >
        <div className="form__inputs">

          {children}
          
        </div>
        <button className={`auth__save`} disabled={!isValid} type="submit">
          {button}
        </button>
      </form>
    </div>
   );
}

export default AuthForm;
