import React from "react";
import { Navbar } from "../header/Navbar";
import { Footer } from "../footer/Footer";
import Cards from "../../assets/images/cards.png";

export const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div class="upper-block">
        <div className="container about__container">
          <h2 className="text--large text--bold text--italic">
            Почему стоит погружаться в мир видеоигр вместе с нами?
          </h2>
          <p className="text--normal text--medium">
            На рынке существует много различных сервисов для аренды вещей. Самые
            популярные из них: Нексту (next2u), Рентарио, Спинлистер
            (Spinlister), Сайло (Sailo) и другие. Но почему-то нет ни одного
            сервиса, благодаря которому люди могли бы заказать Playstation и
            весело провести время с друзьями, “зарубившись” в Mortal Kombat.
          </p>
          <p className="text--normal text--medium">
            Совсем недавно я решил заказать PlayStation 4, чтобы весело провести
            время с братом, пришлось нам это делать через Instagram, звонить
            арендодателю, узнавать о некоторых деталях, а после вообще ехать “за
            три девять земель”, чтобы забрать консоль, что вообще неудобно.
          </p>
          <p className="text--normal text--medium">
            Это событие и сподвигло меня на создание автоматизированного сервиса
            для аренды игровых консолей{" "}
            <span className="text--purple">JoyRentConsole</span>. С нашим
            сервисом вам не нужно тратить время на лишние разговоры с
            арендодателем, ведь всё, что вас интересует есть на нашем сервисе.
          </p>
          <button class="button button--pink text--normal text--bold">
            Присоединиться
          </button>
        </div>
      </div>
      <div className="container about__container">
        <div class="wrapper">
          <div className="about__item">
            <div className="about__description">
              <h2 className="text--big text--medium text--italic">
                Простота аренды
              </h2>
              <p className="text--normal text--medium">
                На рынке существует много различных сервисов для аренды вещей.
                Самые популярные из них: Нексту (next2u), Рентарио, Спинлистер
                (Spinlister), Сайло (Sailo) и другие. Но почему-то нет ни одного
                сервиса, благодаря которому люди могли бы заказать Playstation и
                весело провести время с друзьями, “зарубившись” в Mortal Kombat.
              </p>
            </div>
            <img src={Cards} alt="Card" />
          </div>
          <div className="about__item">
            <div className="about__description">
              <h2 className="text--big text--medium text--italic">
                Возможность сдать в аренду
              </h2>
              <p className="text--normal text--medium">
                Часто бывает такое, что вещи, которыми мы раньше пользовались,
                сейчас пылятся на чердаке, но что если из таких вещей можно
                извлечь пользу?! Таким образом если у вас есть рабочие игровые
                девайсы, которыми вы не пользуетесь, например, PlayStation,
                Xbox, VR очки и т.д. , вы можете с лёгкостью заработать на этом,
                вам достаточно выставить эти вещи на аренду и возможно
                какой-нибудь человек в минуты, когда ему скучно, закажет именно
                ваш девайс. Для того, чтобы сдать в аренду вашу вещь, вам на
                время придется стать маркетологом и грамотно описать ваш
                продукт, чтобы именно он привлек внимание арендаторов.
              </p>
            </div>
          </div>
          <div className="about__item">
            <div className="about__description">
              <h2 className="text--big text--medium text--italic">
                Доставка на дом
              </h2>
              <p className="text--normal text--medium">
                Пожалуй за счёт этой возможности наш сервис и является таким
                удобным и практичным. Ведь для того, чтобы поиграть в Mortal
                Kombat с вашими друзьями, вам достаточно оформить аренду через
                наш сервис, дождаться подтверждения арендодателя (то есть
                заключить электронный договор) и ждать, пока курьер привезёт
                PlayStation прямо к вашему порогу.
              </p>
            </div>
          </div>
          <div className="about__item">
            <div className="about__description">
              <h2 className="text--big text--medium text--italic">
                Заключение электронного договораtext--italic
              </h2>
              <p className="text--normal text--medium">
                Как арендодателю вам вообще не стоит беспокоиться о целостности
                ваших арендуемых девайсов. Ведь на сервисе предусмотрено
                заключение электронного договора о страховании. И в случае
                повреждения ваших девайсов, арендатор будет обязан возместить
                ущерб по договору, поэтому призываем всех бережно относится к
                арендуемым вещам, как к своим сообственным.
              </p>
            </div>
          </div>
          <div className="about__item">
            <div className="about__description">
              <h2 className="text--big text--medium text--italic">
                Доставка в городе Брест
              </h2>
              <p className="text--normal text--medium">
                На данном этапе я решил реализовать сервис только для города
                Брест, но в будущем аренда игровых консолей будет доступна во
                всех крупных городах Республики.
              </p>
            </div>
          </div>
          <div className="about__item">
            <div className="about__description">
              <h2 className="text--big text--medium text--italic">
                Возможность общения с арендодателем
              </h2>
              <p className="text--normal text--medium">
                В случае возникновения некоторых недопониманий между
                арендодателем и арендатором, наш сервис предоставляет удобный
                интерфейс для общения, где вы можете обсудить и уладить все ваши
                вопросы.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button class="button button--pink about__button text--normal text--bold">
        Начать
      </button>
      <Footer />
    </>
  );
};
