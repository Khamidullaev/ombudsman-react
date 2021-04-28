import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router"
import AdviceForm from "../components/Forms/AdviceForm"
import { updateDistictsList, createAdvice } from '../redux/actions/formActions'
import { setDistrictsList, setSendingStatus } from '../redux/reducers/formReducer'

const AnonimFormContainer = (props) => {
  const {push} = useHistory()
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [selectedDistrict, setSelectedDistrict] = useState(null)

  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')

  const [text, setText] = useState('')
  const [submitOnclick, setSubmitOnclick] = useState(false)

  const formSubmit = (e) => {
    e.preventDefault()
    setSubmitOnclick(true)

    if(!selectedRegion || !selectedDistrict || !fullName || !phone || !text) return

    const data = {
      "full_name": fullName,
      "phone": phone,
      "text": text,
      "region_id": selectedRegion.id,
      "district_id": selectedDistrict.id
    }
    props.createAdvice(data)
  }

  useEffect(() => {
    if(selectedRegion) props.updateDistictsList(selectedRegion.id)
  }, [selectedRegion])

  useEffect(() => {
    if(props.sendingStatus==="success") push('/')
  }, [props.sendingStatus])

  useEffect(() => {
    return function cleanup () {
      props.setDistrictsList([])
      props.setSendingStatus('')
    }
  }, [])

  return (
    <>
      <AdviceForm
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedDistrict={selectedDistrict}
        setSelectedDistrict={setSelectedDistrict}
        fullName={fullName}
        setFullName={setFullName}
        phone={phone}
        setPhone={setPhone}

        text={text}
        setText={setText}
        regionsList={props.regionsList}
        districtsList={props.districtsList}
        formSubmit={formSubmit}

        submitOnclick={submitOnclick}
      /> 
    </>
  )
}

const mapDispatchToProps = {
  updateDistictsList,
  createAdvice,
  setSendingStatus,
  setDistrictsList
}

const mapStateToProps = (state) => ({
  regionsList: state.form.regionsList,
  districtsList: state.form.districtsList,
  sendingStatus: state.form.sendingStatus
})

export default connect(mapStateToProps, mapDispatchToProps)(AnonimFormContainer)