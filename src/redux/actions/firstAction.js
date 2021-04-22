export const login = (login, password) => {
  return async dispatch => {

    if(!login || !password) return dispatch(setLoginStatus("wrong"))

    try {
      dispatch(setSmallLoader(true))
      console.log(window.LOGIN_API_URL)
      const response = await axios({
        method: "post",
        baseURL: window.LOGIN_API_URL,
        url: "/login/",
        headers: {
          "Content-Type": "application/json",
          "api-key": "5126a1b6a8bd4186e0caade528421a7c72a08aa697d3085aee854ef59ab6fa2a",
          "version": "3.56.77",
          "lang": "ru"
        },
        data: {
          login: login,
          passw: password
        }
      })
      dispatch(setSmallLoader(false))
      dispatch(setAuth(true))
    } catch (error) {
      dispatch(setSmallLoader(false))
      if(error.response) {
        console.log(error.response.data.error)
        switch (error.response.data.error) {
          case 11:
            dispatch(setLoginStatus("wrong"))
            break;
          case 12:
            dispatch(setLoginStatus("payment"))
            break;
          default:
            dispatch(showAlert("Ошибка соединения. Попробуйте снова"))   
            break;
        }
      }
      else {
        dispatch(showAlert("Ошибка соединения. Попробуйте снова"))     
      }
    }

    
  }
}
