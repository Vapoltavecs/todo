import axios from "axios";
import actions from "../reducers/actions/actions";

const getAllTasks = (id) => {
  return async (dispatch) => {
    dispatch(actions.setLoaded(true));
    const responseResult = await axios.get(
      "http://localhost:8000/api/tasks/tasks",
      { headers: { id: id } }
    );
    dispatch(actions.setLoaded(false));

    dispatch(actions.getAllTasks(responseResult.data.data));
  };
};

export default getAllTasks;
