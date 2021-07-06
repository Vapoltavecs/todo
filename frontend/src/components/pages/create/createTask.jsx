import React from "react";
import { useDispatch, useSelector } from "react-redux";
import addNewTask from "../../../redux/asyncFunctions/addNewTask";
import Spinner from "../../spinner/Spinner";
import classes from "./createTask.module.scss";

const CreateTask = () => {
  const dispatch = useDispatch();
  const title = React.createRef();
  const planed = React.createRef();
  const description = React.createRef();
  const jwt = useSelector((state) => state.AuthReducer.token);
  const isLoading = useSelector((state) => state.setLoading.isLoading);
  const dispatchAddFormData = () => {
    dispatch(
      addNewTask({
        title: title.current.value,
        planed: planed.current.value,
        description: description.current.value,
        jwt,
      })
    );

    title.current.value = "";
    planed.current.value = "";
    description.current.value = "";
  };
  return !isLoading ? (
    <div className={classes.form__wrapper}>
      <div className={classes.form}>
        <label>
          <div className={classes.form__title}>Название</div>
          <input type="text" className={classes.form__input} ref={title} />
        </label>
        <label>
          <div className={classes.form__title}>Запланированное время</div>
          <input
            type="text"
            className={classes.form__input_time}
            ref={planed}
          />
        </label>
        <textarea
          cols="30"
          rows="10"
          placeholder="Описание вашей задачи"
          className={classes.form__textarea}
          ref={description}
        ></textarea>
        <div
          className={classes.form__button_login}
          onClick={dispatchAddFormData}
        >
          Создать задачу
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default CreateTask;
