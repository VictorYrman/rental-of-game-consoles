//Modules
import React from "react";
import { Link } from "react-router-dom";

//Utils
import Robot from "../../assets/images/robot-404.svg";

export const NotFoundPage = () => {
  return (
    <>
      <section className="not-found">
        <div className="container not-found__container">
          <img src={Robot} alt="Робот 404" />
          <div>
            <h1 className="not-found__heading text--veryLarge text--semibold text--purple">
              Страница не найдена
            </h1>
            <p className="not-found__description text--medium text--normal">
              страница на которую вы пытаетесь попасть, не существует или была
              удалена. Перейдите на{" "}
              <Link to={"/"} className="text--purple text--underline">
                Главную страницу
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
