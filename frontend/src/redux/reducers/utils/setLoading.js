const initialState = {
  isLoading: false,
};
export const setLoading = (state = initialState, action) => {
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: action.isLoaded,
    };
  }
  return state;
};
