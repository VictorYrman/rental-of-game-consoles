//Modules
import { Link } from "react-router-dom";

//Utils
import { Navbar } from "../header/Navbar";
import { Footer } from "../footer/Footer";
import Robot from "../../assets/images/robot.svg";
import Quote from "../../assets/images/Quote.svg";
import Unknown from "../../assets/images/unknown.png";

export const MainPage = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="hero__background--image">
          <img src={Robot} alt="Робот" />
        </div>
        <div className="container hero__container">
          <h1 className="hero__heading text--veryLarge text--semibold">
            Арендуй <span className="text--purple">приставки</span> и
            зарабатывай <span className="text--purple">деньги</span>
          </h1>
          <div>
            <p className="text--medium text--normal">
              Получи удовольствие от игр благодаря широкому выбору консолей,
              которые можно взять напрокат.
            </p>
            <div className="hero__buttons">
              <button className="button button--pink">
                <Link to={"/catalog"} className="text--normal text--bold">
                  Аренда
                </Link>
              </button>
              <button className="button button--transparent">
                <Link to={"/about"} className="text--normal text--bold">
                  Узнать больше
                </Link>
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
              <p className="reviewer__name text--big text--bold text--purple">
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
              <p className="reviewer__name text--big text--bold text--purple">
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
              <p className="reviewer__name text--big text--bold text--purple">
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
      <Footer />
    </>
  );
};
