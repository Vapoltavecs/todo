const initialState = {
  isMatch: false,
  userId: 0,
};
export const AuthReducer = (state = initialState, action) => {
  if (action.type === "AUTH_REDUCER") {
    return {
      ...state,
      isMatch: action?.payload?.isMatch,
      token: action?.payload?.token,
      
    };
  }
  return state;
};
