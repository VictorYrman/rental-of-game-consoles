//Modules
import React, { useState } from "react";
import axios from "axios";

//Utils
import "../../assets/css/auth.css";
import Crossing from "../../assets/images/crossing.svg";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:9999/api/users/register", { ...user });

      localStorage.setItem("firstRegister", true);

      window.location.href = "/";
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={registerSubmit} className="auth">
        <h1 className="auth__heading text--large">Регистрация</h1>
        <div className="auth__line"></div>
        <div className="auth__inputs">
          <input
            type="text"
            name="userName"
            id="userName"
            className="auth__input text--normal"
            placeholder="Ваше имя"
            value={user.userName}
            onChange={onChangeInput}
          />
          <input
            type="email"
            name="email"
            id="email"
            className="auth__input text--normal"
            placeholder="Адрес электронной почты"
            value={user.email}
            onChange={onChangeInput}
          />
          <input
            type="password"
            name="password"
            id="password"
            className="auth__input text--normal"
            placeholder="Пароль"
            value={user.password}
            onChange={onChangeInput}
            autoComplete="on"
          />
        </div>
        <div className="auth__row">
          <button
            type="submit"
            className="button button--pink auth__button text--normal text--bold"
          >
            Регистрация
          </button>
          <a className="auth__link text--purple">Уже есть аккаунт</a>
          <p className="auth__text text--small">
            Нажимая “Зарегистрироваться”, даю{" "}
            <span className="text--purple">согласие</span> на обработку
            персональных данных и принимаю условия{" "}
            <span className="text--purple">пользовательского соглашения</span>
          </p>
        </div>
      </form>
    </>
  );
};
