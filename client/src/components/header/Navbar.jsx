//Modules
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

//Utils
import "../../assets/css/navbar.css";
import Logo from "../../assets/images/Logo (original).svg";
import { Modal } from "./Modal";
import { GlobalState } from "../../GlobalState";

export const Navbar = () => {
  const state = useContext(GlobalState);
  const [modalActive, setModalActive] = useState(false);
  const [button, setButton] = useState("");
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;

  const logoutUser = async () => {
    await axios.get("http://localhost:9999/api/users/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };

  const loggedRouter = () => {
    return (
      <button
        className="button button--pink text--big text--bold"
        id="exit"
        onClick={logoutUser()}
      >
        Выход
      </button>
    );
  };

  const unLoggedRouter = () => {
    return (
      <>
        {/* <button
          className="button button--transparent text--big text--bold"
          onClick={() => {
            setModalActive(true);
            setButton("Login");
          }}
          id="login"
        >
          Войти
        </button> */}
        <button className="button button--pink text--big text--bold">
          <Link to={"/login"}>Логин</Link>
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
      </>
    );
  };

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
            {isLogged ? loggedRouter() : unLoggedRouter()}
          </div>
        </div>
      </header>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        button={button}
        setButton={setButton}
      />
    </>
  );
};
