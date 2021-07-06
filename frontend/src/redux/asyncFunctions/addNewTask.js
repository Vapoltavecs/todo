import actions from "../reducers/actions/actions";
const addNewTask = (props) => {
  return async (dispatch) => {
    dispatch(actions.setLoaded(true));

    const res = await fetch("http://localhost:8000/api/create/create", {
      method: "POST",
      body: JSON.stringify(props),
      headers: {
        "Content-Type": "application/json",
        id: props.jwt,
      },
    });

    dispatch(actions.setLoaded(false));
  };
};

export default addNewTask;
