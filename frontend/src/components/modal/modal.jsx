import React from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllTasks from "../../redux/asyncFunctions/getAllTasks";
import actions from "../../redux/reducers/actions/actions";
import "./modal.scss";
const ModalWindow = ({ closeModal, taskId }) => {
  const editTaskDescriptionRef = React.createRef();
  const description = useSelector(
    (state) => state.editDescription.newDescription
  );
  const dispatch = useDispatch();
  const id = useSelector((state) => state.AuthReducer.token);
  const editTask = async () => {
    dispatch(actions.setLoaded(true));
    const result = await fetch("http://localhost:8000/api/edit/", {
      method: "POST",
      body: JSON.stringify({
        taskId: taskId,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch(actions.setLoaded(false));
    closeModal(false);
    dispatch(getAllTasks(id));
  };
  

  return (
    <div className="modal-component">
      <div className="modal">
        <textarea
          cols="30"
          rows="10"
          value={description}
          ref={editTaskDescriptionRef}
          onInput={() => {
            dispatch(
              actions.editTaskDescription(editTaskDescriptionRef.current.value)
            );
          }}
        ></textarea>
        <div className="buttons">
          <div className=" modal__button" onClick={editTask}>
            Сохранить
          </div>
          <div className=" modal__button" onClick={() => closeModal(false)}>
            Закрыть
          </div>
        </div>
      </div>
      <div className="opacity"></div>
    </div>
  );
};

export default ModalWindow;
