const initialState = {
  tasks: [],
};

const getAllTasks = (state = initialState, action) => {
  if (action.type === "GET_ALL_TASKS") {
    return {
      ...state,
      tasks: action.payload,
    };
  }
  return state;
};

export default getAllTasks;
