import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import postUserData from "../../../redux/asyncFunctions/postRegistrData";
import classes from "./registratedForm.module.scss";

const RegistratedForm = () => {
  const dispatch = useDispatch();
  const email = React.createRef();
  const password = React.createRef();
  const registratedRequest = () => {
    dispatch(
      postUserData({
        email: email.current.value,
        password: password.current.value,
      })
    );
  };

  return (
    <div className={classes.form__wrapper}>
      <form className={classes.form}>
        <div className={classes.form__title}>Регистрация</div>
        <label>
          <div className={classes.form__input_title}>E-mail</div>
          <input type="text" className={classes.form__input} ref={email} />
        </label>
        <label>
          <div className={classes.form__input_title}>Пароль</div>
          <input
            type="password"
            className={classes.form__input}
            ref={password}
          />
        </label>

        <div
          className={classes.form__button_login}
          onClick={registratedRequest}
        >
          Регистрация
        </div>
        <div className={classes.form__button}>
          Уже зарегистрированны? <NavLink to="/">Войти</NavLink>
        </div>
      </form>
    </div>
  );
};

export default RegistratedForm;
