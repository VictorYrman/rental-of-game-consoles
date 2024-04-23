import React from "react";
import "../css/mainPage.css";
import { NavLink } from "react-router-dom";
import Robot from "../images/robot.svg";
import Quote from "../images/Quote.svg";
import Unknown from "../images/unknown.png";

export const MainPage = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero__background--image">
          <img src={Robot} alt="Робот" />
        </div>
        <div className="container hero__container">
          <h1 className="hero__heading text--veryLarge text--semibold">
            Аренда <div className="text--pink">игровых консолей</div>
          </h1>
          <div>
            <p className="text--medium">
              Испытайте бурю эмоций от игр с нашим широким выбором консолей.
            </p>
            <div className="hero__buttons">
              <button className="button button--pink text--normal text--semibold">
                <NavLink>Аренда</NavLink>
              </button>
              <button className="button button--transparent text--normal text--semibold">
                <NavLink>Узнать больше</NavLink>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews">
        <div className="container reviews__container">
          <div className="review-1">
            <div className="reviewer">
              <img src={Unknown} alt="Unknown" className="reviewer__avatar" />
              <p className="reviewer__name text--big text--bold text-pink">
                Person 1
              </p>
            </div>
            <div className="reviews__text">
              <img src={Quote} alt="Quote" className="reviews__quote" />
              <p className="text--normal text--medium ">
                Из этого сервиса только фотографии хороши. Если у вас нет
                проблем с жильцами, то сервис просто молча забирает комиссию.
                Истинное их лицо возникает, когда начинаются проблемы. Мне
                попался недобросовестный жилец, который съехал без
                предупреждения с...
              </p>
            </div>
          </div>
          <div className="review-2">
            <div className="reviewer">
              <img src={Unknown} alt="Unknown" className="reviewer__avatar" />
              <p className="reviewer__name text--big text--bold text-pink">
                Person 2
              </p>
            </div>
            <div className="reviews__text">
              <img src={Quote} alt="Quote" className="reviews__quote" />
              <p className="text--normal text--medium ">
                Из этого сервиса только фотографии хороши. Если у вас нет
                проблем с жильцами, то сервис просто молча забирает комиссию.
                Истинное их лицо возникает, когда начинаются проблемы. Мне
                попался недобросовестный жилец, который съехал без
                предупреждения с...
              </p>
            </div>
          </div>
          <div className="review-3">
            <div className="reviewer">
              <img src={Unknown} alt="Unknown" className="reviewer__avatar" />
              <p className="reviewer__name text--big text--bold text-pink">
                Person 3
              </p>
            </div>
            <div className="reviews__text">
              <img src={Quote} alt="Quote" className="reviews__quote" />
              <p className="text--normal text--medium ">
                Из этого сервиса только фотографии хороши. Если у вас нет
                проблем с жильцами, то сервис просто молча забирает комиссию.
                Истинное их лицо возникает, когда начинаются проблемы. Мне
                попался недобросовестный жилец, который съехал без
                предупреждения с...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
