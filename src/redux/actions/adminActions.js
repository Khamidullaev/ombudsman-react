import axios from "axios"
import { BASE_URL } from "../../CONFIG"
import { setAdviceDetail, setAdvicesList, setAppealDetail, setAppealsList, setPageCount } from "../reducers/adminReducer"
import { setAlertMessage } from "../reducers/appReducer"

export const updateAppealsList = (pageNumber, perPage) => {
  return async dispatch => {
    try {
      const response = await axios({
        method: "GET",
        baseURL: BASE_URL,
        url: `/api/appeals?page=${pageNumber}&per_page=${perPage}`,
      })
      dispatch(setAppealsList(response.data.data))  
      dispatch(setPageCount(response.data.page_count))
    } catch (error) {
      console.log(error)
      dispatch(setAlertMessage({message:"Ошибка соединения. Попробуйте снова", type: "error"}))   
    }
  }
}

export const updateAdvicesList = (pageNumber, perPage) => {
  return async dispatch => {
    try {
      const response = await axios({
        method: "GET",
        baseURL: BASE_URL,
        url: `/api/advices?page=${pageNumber}&per_page=${perPage}`,
      })
      dispatch(setAdvicesList(response.data.data))  
      dispatch(setPageCount(response.data.page_count))
    } catch (error) {
      console.log(error)
      dispatch(setAlertMessage({message:"Ошибка соединения. Попробуйте снова", type: "error"}))   
    }
  }
}

export const updateAdviceDetail = (id) => {
  return async dispatch => {
    try {
      const response = await axios({
        method: "GET",
        baseURL: BASE_URL,
        url: `/api/advices/${id}`,
      })
      dispatch(setAdviceDetail(response.data))  
    } catch (error) {
      console.log(error)
      dispatch(setAlertMessage({message:"Ошибка соединения. Попробуйте снова", type: "error"}))   
    }
  }
}

export const updateAppealDetail = (id) => {
  return async dispatch => {
    try {
      const response = await axios({
        method: "GET",
        baseURL: BASE_URL,
        url: `/api/appeals/${id}`,
      })
      dispatch(setAppealDetail(response.data))  
    } catch (error) {
      console.log(error)
      dispatch(setAlertMessage({message:"Ошибка соединения. Попробуйте снова", type: "error"}))   
    }
  }
}