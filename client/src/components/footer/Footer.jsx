//Modules
import React from "react";
import { Link } from "react-router-dom";

//Utils
import Instagram from "../../assets/images/instagram.svg";
import Telegram from "../../assets/images/telegram.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Discord from "../../assets/images/discord.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__container--grid">
          <div className="footer__contacts">
            <p className="text--normal text--bold">Контакты:</p>
            <div className="footer__contact">
              <p className="footer__email text--normal text--medium">
                vitiayrashevich1256@gmail.com
              </p>
              <p className="footer__phone text--normal text--medium">
                +375 (33) 254-23-23
              </p>
              <div className="social--networks">
                <Link to={"https://www.instagram.com/_yrman_/"} target="_blank">
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="footer__icon"
                  />
                </Link>
                <Link to={"https://tlgg.ru/theyrman"} target="_blank">
                  <img src={Telegram} alt="Telegram" className="footer__icon" />
                </Link>
                <Link
                  to={"https://discord.com/users/994884455154057226"}
                  target="_blank"
                >
                  <img src={Discord} alt="Discord" className="footer__icon" />
                </Link>
                <Link
                  to={"https://www.linkedin.com/in/vitya-yrman-a83508264/"}
                  target="_blank"
                >
                  <img src={Linkedin} alt="Linkedin" className="footer__icon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer__container--menu">
            <ul className="menu footer__menu">
              <li>
                <Link to={"/catalog"} className="text--normal text--bold">
                  Аренда
                </Link>
              </li>
              <li>
                <Link to={"/catalog"} className="text--normal text--bold">
                  Сдача в аренду
                </Link>
              </li>
              <li>
                <Link to={"/help"} className="text--normal text--bold">
                  Поддержка
                </Link>
              </li>
            </ul>
            <ul className="menu footer__menu">
              <li>
                <Link to={"/help/security"} className="text--normal text--bold">
                  Безопасность
                </Link>
              </li>
              <li>
                <Link to={"/help/partners"} className="text--normal text--bold">
                  Партнёры
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__line"></div>
        <div className="footer__link">
          <p className="text--normal text--bold">
            2024 yrman. Все права защищены.
          </p>
          <div className="footer__link--last">
            <Link className="text--normal text--bold text--underline">
              Политика конфиденциальности
            </Link>
            <Link className="text--normal text--bold text--underline">
              Условия обслуживания
            </Link>
            <Link className="text--normal text--bold text--underline">
              Настройки файлов cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
