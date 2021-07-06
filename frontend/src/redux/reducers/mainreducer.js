import { combineReducers } from "redux";
import { AuthReducer } from "./utils/authReducer";
import getAllTasks from "./utils/getAllTasks";
import { setLoading } from "./utils/setLoading";
import editDescription from "./utils/editDescription";

const rootReducer = combineReducers({
  AuthReducer,
  getAllTasks,
  setLoading,
  editDescription,
});

export default rootReducer;
