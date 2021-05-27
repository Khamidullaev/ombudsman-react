import { SET_ALERT_MESSAGE, SET_LOADER, SET_LOCALE } from "../types"


const defaultState = {
  locale: "uz-Latn-UZ",
  language: "uz",
  alertMessage: {type: null, message: ''},
  loader: false
}

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_LOCALE:
      return {
        ...state,
        locale: action.locale,
        language: action.language
      }

    case SET_ALERT_MESSAGE: 
      return {
        ...state,
        alertMessage: action.payload
      }
    
    case SET_LOADER:
      return {
        ...state,
        loader: action.payload
      }

    default:
      return state
  }
}

export const setLocale = (locale, language) => ({type: SET_LOCALE, locale, language})
export const setAlertMessage = message => ({type: SET_ALERT_MESSAGE, payload: message})
export const setLoader = boolean => ({type: SET_LOADER, payload: boolean})

