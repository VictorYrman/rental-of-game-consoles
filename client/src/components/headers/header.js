import React, {useState, useContext} from "react";
import {GlobalState} from '../../GlobalState'

import {Link, NavLink} from "react-router-dom";

import "./header.css"
import Logo from "./icon/Logo (original).svg"


function Header() {
    const value = useContext(GlobalState)
    return (
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
              id="login"
            >
            <NavLink to={"/login"}>
              Войти
            </NavLink>
            </button>

            <button
              className="button button--pink text--big text--bold"
              id="register"
            >
                <NavLink to={"/register"}>
              Регистрация
                </NavLink>
            </button>
          </div>
        </div>
      </header>
    )
}

export default Header