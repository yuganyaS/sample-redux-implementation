import { combineReducers } from "redux";
import postreducers from "./postreducers";

export default combineReducers({
  posts: postreducers
});
