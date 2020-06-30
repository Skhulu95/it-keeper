import { combineReducers } from "redux";
import logReducer from "./logReducer";
// eslint-disable-next-line
import techReducer from "./techReducer";

export default combineReducers({
	log: logReducer,
});
