import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../../../../redux/reducers/actions/actions";
import ModalWindow from "../../../modal/modal";
import classes from "./task.module.scss";

const Task = ({ id, title, planed, description, removeTask, completeTask, isComplete }) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      {modal && (
        <ModalWindow
          description={description}
          closeModal={setModal}
          taskId={id}
        />
      )}
      <div id={id} className={classes.card}>
        <div className={classes.card__top}>
          <div className={classes.card__title}>{title}</div>
          <div className={classes.planed}>{planed}</div>
        </div>
        <div className={classes.card__description}>{description}</div>
        {!isComplete && <div className={classes.completed} onClick={() => completeTask(id)}>Выполнить</div>}
        {!isComplete && <div className={classes.card__modal}>
          <div
            className={classes.card__modal_remove}
            onClick={() => removeTask(id)}
          >
            <img src="https://img.icons8.com/material-rounded/48/000000/delete.png" />
          </div>
          <div
            className={classes.card__modal_edit}
            onClick={() => {
              dispatch(actions.editTaskDescription(description));
              setModal(true);
            }}
          >
            <img src="https://img.icons8.com/android/48/000000/edit.png" />
          </div>
        </div>
        }
      </div>
    </div>
  );
};

export default Task;
