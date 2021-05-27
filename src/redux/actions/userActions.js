import axios from "axios"
import { BASE_URL } from "../../CONFIG"
import { setAlertMessage, setLoader } from "../reducers/appReducer"
import { setPasswordIsWrong, setIsAuth } from "../reducers/userReducer"

export const loginAction = (login, password) => {
  return async dispatch => {
    dispatch(setLoader(true))
    try {
      await axios({
        method: "post",
        baseURL: BASE_URL,
        url: "/api/auth/sign-in",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          username: login,
          password: password
        }
      })
      dispatch(setIsAuth(true))
      dispatch(setLoader(false))
      localStorage.setItem('isAuth', true)
    } catch (error) {
      dispatch(setLoader(false))
      if(error.response) {
        if(error.response.status===401) dispatch(setPasswordIsWrong(true))
        else dispatch(setAlertMessage({message: "Ошибка соединения. Попробуйте снова", type: 'error'}))     

      }
      else {
        dispatch(setAlertMessage({message: "Ошибка соединения. Попробуйте снова", type: 'error'}))     
      }
    }
  
      
  }
}
  