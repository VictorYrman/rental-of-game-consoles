//Modules
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

//Utils
import "../../assets/css/navbar.css";
import Logo from "../../assets/images/Logo (original).svg";
import { Modal } from "./Modal";

export const Navbar = () => {
  const [modalActive, setModalActive] = useState(false);
  const [button, setButton] = useState("");

  return (
    <>
      <header className="header">
        <div className="container header__container">
          <nav className="header__navbar">
            <NavLink to={"/"}>
              <img src={Logo} alt="Логотип" className="logo" />
            </NavLink>
            <ul className="menu header__menu">
              <li className="menu__item header__menu__item">
                <NavLink to={"/catalog"} className="text--big text--medium">
                  Каталог
                </NavLink>
              </li>
              <li className="menu__item header__menu__item">
                <NavLink to={"/about"} className="text--big text--medium">
                  О нас
                </NavLink>
              </li>
              <li className="menu__item header__menu__item">
                <NavLink to={"/service"} className="text--big text--medium">
                  Услуги
                </NavLink>
              </li>
              <li className="menu__item header__menu__item">
                <NavLink to={"/help"} className="text--big text--medium">
                  Помощь
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__buttons">
            <button
              className="button button--transparent text--big text--bold"
              onClick={() => {
                setModalActive(true);
                setButton("Login");
              }}
              id="login"
            >
              Войти
            </button>
            <button
              className="button button--pink text--big text--bold"
              onClick={() => {
                setModalActive(true);
                setButton("Register");
              }}
              id="register"
            >
              Регистрация
            </button>
          </div>
        </div>
      </header>
      <Modal active={modalActive} setActive={setModalActive} button={button} />
    </>
  );
};
