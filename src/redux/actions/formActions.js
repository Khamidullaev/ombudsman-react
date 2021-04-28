
import axios from "axios"
import { setAlertMessage } from "../reducers/appReducer"
import { setDistrictsList, setRegionsList, setSendingStatus } from "../reducers/formReducer"

export const updateRegionsList = () => {
  return async dispatch => {
    try {
      const response = await axios({
        method: "GET",
        baseURL: "http://46.36.219.248:9000",
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
        baseURL: "http://46.36.219.248:9000",
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
    try {
      await axios({
        method: "POST",
        baseURL: "http://46.36.219.248:9000",
        url: "/api/appeals",
        headers: {
          "Content-Type": "application/json"
        },
        data
      })
      dispatch(setSendingStatus('success'))
      dispatch(setAlertMessage({message:"Murojaatingiz muvofaqiyatli jo'natildi", type: "info"}))   

    } catch (error) {
      console.log(error)
      dispatch(setSendingStatus('error'))
      dispatch(setAlertMessage({message:"Ошибка соединения. Попробуйте снова", type: "error"}))   
    }
  }
}

export const createAdvice = (data) => {
  return async dispatch => {
    dispatch(setSendingStatus('sending'))
    try {
      await axios({
        method: "POST",
        baseURL: "http://46.36.219.248:9000",
        url: "/api/advices",
        headers: {
          "Content-Type": "application/json"
        },
        data
      })
      dispatch(setSendingStatus('success'))
      dispatch(setAlertMessage({message:"Murojaatingiz muvofaqiyatli jo'natildi", type: "info"}))   

    } catch (error) {
      dispatch(setSendingStatus('error'))
      dispatch(setAlertMessage({message:"Ошибка соединения. Попробуйте снова", type: "error"}))   
    }
  }
}


