import axios from "axios";

const actions = {
  authActions: (payload) => {
    return {
      type: "AUTH_REDUCER",
      payload: payload,
    };
  },
  getAllTasks: (id) => {
    return {
      type: "GET_ALL_TASKS",
      payload: id,
    };
  },
  setLoaded: (isLoaded) => {
    return {
      type: "SET_LOADING",
      isLoaded: isLoaded
    };
  },
  editTaskDescription: (newValue) => {
    return {
      type: 'EDIT_DESCRIPTION',
      payload: newValue
    }
  }
};

export default actions;
