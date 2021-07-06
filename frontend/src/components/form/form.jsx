import React from "react";
import { useDispatch } from "react-redux";
import postUserDataLogin from "../../redux/asyncFunctions/postLoginData";
import { NavLink } from "react-router-dom";
import classes from "./form.module.scss";

const Form = () => {
  const dispatch = useDispatch();
  const email = React.createRef();
  const password = React.createRef();

  const loginInput = () => {
    dispatch(
      postUserDataLogin({
        email: email.current.value,
        password: password.current.value,
      })
    );
  };
  return (
    <div className={classes.form__wrapper}>
      <form className={classes.form}>
        <div className={classes.form__title}>Авторизация</div>
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

        <div className={classes.form__button_login} onClick={loginInput}>
          Войти
        </div>
        <div className={classes.form__button}>
          Еще не зарегистрированны?{" "}
          <NavLink to="/registrated">Зарегистрируйтесь</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Form;
