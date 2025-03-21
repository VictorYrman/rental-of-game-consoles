//Modules
import React, { useState } from "react";
import axios from "axios";

//Utils
import "../../assets/css/auth.css";

export const Login = ({ setActive, setButton }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:9999/user/login", { ...user });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const switchToRegister = () => {
    setActive(false);
    setButton("Register");
  };

  return (
    <>
      <form onSubmit={loginSubmit} className="auth">
        <h1 className="auth__heading text--large">Вход</h1>
        <div className="auth__line"></div>
        <div className="auth__inputs">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Адрес электронной почты"
            className="input input--transparent auth__input text--normal"
            value={user.email}
            onChange={onChangeInput}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
            className="input input--transparent auth__input text--normal"
            value={user.password}
            onChange={onChangeInput}
            autoComplete="on"
          />
          <a className="auth__link auth__link--account text--purple">
            Забыли пароль?
          </a>
        </div>
        <div className="auth__row">
          <button
            type="submit"
            className="button button--pink auth__button text--normal text--bold"
          >
            Логин
          </button>
          <button
            type="button"
            className="button button--transparent auth__button text--normal text--bold"
            onClick={switchToRegister}
          >
            Регистрация
          </button>
        </div>
      </form>
    </>
  );
};
