import axios from "axios"
import { setAlertMessage } from "../reducers/appReducer"
import { setPasswordIsWrong, setIsAuth } from "../reducers/userReducer"

export const loginAction = (login, password) => {
  return async dispatch => {
  
    try {
      await axios({
        method: "post",
        baseURL: "http://46.36.219.248:9000",
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
      localStorage.setItem('isAuth', true)
    } catch (error) {
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
  