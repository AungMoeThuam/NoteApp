import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import renderReducer from "./renderReducer";

const reducer = combineReducers({
  todoReducer,
  renderReducer,
});

export default reducer;
