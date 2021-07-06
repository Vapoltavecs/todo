const initialState = {
  newDescription: "",
};
const editDescription = (state = initialState, action) => {
  if (action.type === "EDIT_DESCRIPTION") {
    return {
      ...state,
      newDescription: action.payload,
    };
  }
  return state;
};

export default editDescription;
