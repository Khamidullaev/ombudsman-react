import { SET_DISTRICTS_LIST, SET_REGIONS_LIST, SET_SENDING_STATUS } from "../types"


const defaultState = {
  regionsList: [],
  districtsList: [],
  sendingStatus: ''
}

export default function formReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REGIONS_LIST:
      return {
        ...state,
        regionsList: action.payload
      }
      
    case SET_DISTRICTS_LIST:
      return {
        ...state,
        districtsList: action.payload
      }

    case SET_SENDING_STATUS:
      return {
        ...state,
        sendingStatus: action.payload
      }

    default:
      return state
  }
}

export const setRegionsList = list => ({type: SET_REGIONS_LIST, payload: list})
export const setDistrictsList = list => ({type: SET_DISTRICTS_LIST, payload: list})
export const setSendingStatus = status => ({type: SET_SENDING_STATUS, payload: status})
