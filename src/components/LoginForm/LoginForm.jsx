import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ credentials, onChange, errorMessage, onSubmit }) => {
  console.log(credentials);
  console.log(errorMessage);
  return (
    <div className="login-form-wrapper">
      <form className="login-form" onSubmit={onSubmit}>
        <div className="login-form__field">
          <label htmlFor="idInstance" className="login-form__label">
            idInstance
          </label>
          <input type="text" id="idInstance" name="idInstance" value={credentials.idInstance} onChange={onChange} className="login-form__input" />
          {errorMessage.idInstance && <p className="login-form__error">{errorMessage.idInstance}</p>}
        </div>

        <div className="login-form__field">
          <label htmlFor="apiTokenInstance" className="login-form__label">
            apiTokenInstance
          </label>
          <input type="password" id="apiTokenInstance" name="apiTokenInstance" value={credentials.apiTokenInstance} onChange={onChange} className="login-form__input" />
          {errorMessage.apiTokenInstance && <p className="login-form__error">{errorMessage.apiTokenInstance}</p>}
        </div>
        <button type="submit" className="login-form__button">
          LogIn
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
