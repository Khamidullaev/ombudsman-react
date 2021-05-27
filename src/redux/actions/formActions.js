
import axios from "axios"
import { BASE_URL } from "../../CONFIG"
import { setAlertMessage, setLoader } from "../reducers/appReducer"
import { setDistrictsList, setRegionsList, setSendingStatus } from "../reducers/formReducer"

export const updateRegionsList = () => {
  return async dispatch => {
    try {
      const response = await axios({
        method: "GET",
        baseURL: BASE_URL,
        url: "/api/regions"
      })
      dispatch(setRegionsList(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateDistictsList = (regionId) => {
  return async dispatch => {
    try {
      const response = await axios({
        method: "GET",
        baseURL: BASE_URL,
        url: `/api/districts/${regionId}`
      })
      dispatch(setDistrictsList(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const createAppeal = (data) => {
  return async dispatch => {
    dispatch(setSendingStatus('sending'))
    dispatch(setLoader(true))
    try {
      await axios({
        method: "POST",
        baseURL: BASE_URL,
        url: "/api/appeals",
        headers: {
          "Content-Type": "application/json"
        },
        data
      })
      dispatch(setSendingStatus('success'))
      dispatch(setAlertMessage({message:"Murojaatingiz muvofaqiyatli jo'natildi", type: "info"}))   
      dispatch(setLoader(false))
    } catch (error) {
      dispatch(setSendingStatus('error'))
      dispatch(setAlertMessage({message:"Ошибка соединения. Попробуйте снова", type: "error"}))   
      dispatch(setLoader(false))
    }
  }
}

export const createAdvice = (data) => {
  return async dispatch => {
    dispatch(setSendingStatus('sending'))
    dispatch(setLoader(true))
    try {
      await axios({
        method: "POST",
        baseURL: BASE_URL,
        url: "/api/advices",
        headers: {
          "Content-Type": "application/json"
        },
        data
      })
      dispatch(setSendingStatus('success'))
      dispatch(setAlertMessage({message:"Murojaatingiz muvofaqiyatli jo'natildi", type: "info"}))   
      dispatch(setLoader(false))
    } catch (error) {
      dispatch(setSendingStatus('error'))
      dispatch(setAlertMessage({message:"Ошибка соединения. Попробуйте снова", type: "error"}))   
      dispatch(setLoader(false))
    }
  }
}


