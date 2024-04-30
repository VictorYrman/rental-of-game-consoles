//Utils
import { Login } from "../auth/LoginPage";
import { Register } from "../auth/RegisterPage";
import "../../assets/css/modal.css";

export const Modal = ({ active, setActive, button }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {button === "Login" ? <Login /> : <Register />}
      </div>
    </div>
  );
};
