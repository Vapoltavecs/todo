import actions from "../reducers/actions/actions";

const postUserDataLogin = (payload) => {
  return (dispatch) => {
    dispatch(actions.setLoaded(true));
    fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          resp.json().then((data) => alert(data.message));
        } else return resp.json();
      })
      .then((data) => {
        dispatch(actions.setLoaded(false));
        dispatch({ type: "AUTH_REDUCER", payload: data });
      });
  };
};

export default postUserDataLogin;
