import { combineReducers } from "redux";
import firstReducer from "./firstReducer";


export const rootReducer = combineReducers({
  first: firstReducer
})