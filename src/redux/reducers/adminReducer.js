import { SET_ADVICES_LIST, SET_ADVICE_DETAIL, SET_APPEALS_LIST, SET_APPEAL_DETAIL, SET_PAGE_COUNT } from "../types"

const defaultState = {
  appealsList: [],
  advicesList: [],
  pageCount: 1,
  adviceDetail: {},
  appealDetail: {}
}

export default function adminReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_APPEALS_LIST:
      return {
        ...state,
        appealsList: action.payload
      }
    
    case SET_ADVICES_LIST:
      return {
        ...state,
        advicesList: action.payload
      }

    case SET_PAGE_COUNT:
      return {
        ...state,
        pageCount: action.payload
      }

    case SET_ADVICE_DETAIL:
      return {
        ...state,
        adviceDetail: action.payload
      }
     
    case SET_APPEAL_DETAIL:
      return {
        ...state,
        appealDetail: action.payload
      }
      
    default:
      return state
  }
}

export const setAppealsList = list => ({type: SET_APPEALS_LIST,  payload: list})
export const setAdvicesList = list => ({type: SET_ADVICES_LIST, payload: list})
export const setPageCount = number => ({type: SET_PAGE_COUNT, payload: number})
export const setAppealDetail = detail => ({type: SET_APPEAL_DETAIL, payload: detail})
export const setAdviceDetail = detail => ({type: SET_ADVICE_DETAIL, payload: detail})

