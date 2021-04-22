import { SET_FIRST_ELEMENT } from "../types";


const defaultState = {
  fistElement: false
}

export default function firstReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_FIRST_ELEMENT:
      return {
        ...state,
        firstElement: action.payload
      }
  
    default:
      return state
  }
}

export const setFirstElement = (boolean) => ({type: SET_FIRST_ELEMENT, payload: boolean})