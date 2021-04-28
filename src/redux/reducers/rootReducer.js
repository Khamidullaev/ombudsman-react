import { combineReducers } from "redux";
import appReducer from "./appReducer";
import formReducer from "./formReducer";
import userReducer from './userReducer'
import adminReducer from './adminReducer'

export const rootReducer = combineReducers({
  form: formReducer,
  app: appReducer,
  user: userReducer,
  admin: adminReducer
})