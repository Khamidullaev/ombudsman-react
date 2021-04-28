import { SET_IS_AUTH, SET_PASSWORD_IS_WRONG } from "../types"


const defaultState = {
  isAuth: localStorage.getItem('isAuth') || false,
  passwordIsWrong: false
}

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload
      }
    
    case SET_PASSWORD_IS_WRONG:
      return {
        ...state,
        passwordIsWrong: action.payload
      }
      
    default:
      return state
  }
}

export const setIsAuth = boolean => ({type: SET_IS_AUTH,  payload: boolean})
export const setPasswordIsWrong = boolean => ({type: SET_PASSWORD_IS_WRONG, payload: boolean})
