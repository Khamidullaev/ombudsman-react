import { SET_ALERT_MESSAGE, SET_LOCALE } from "../types"


const defaultState = {
  locale: "uz-Latn-UZ",
  language: "uz",
  alertMessage: {type: null, message: ''}
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
    
    default:
      return state
  }
}

export const setLocale = (locale, language) => ({type: SET_LOCALE, locale, language})
export const setAlertMessage = message => ({type: SET_ALERT_MESSAGE, payload: message})
