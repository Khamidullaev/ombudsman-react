import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router"
import AnonimForm from "../components/Forms/AnonimForm"
import { updateDistictsList, createAppeal } from '../redux/actions/formActions'
import { setDistrictsList, setSendingStatus } from '../redux/reducers/formReducer'

const AnonimFormContainer = (props) => {
  const {push} = useHistory()
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [selectedDistrict, setSelectedDistrict] = useState(null)

  const [companyName, setCompanyName] = useState('')
  const [companyLevel, setCompanyLevel] = useState('')

  const [companyPerson, setCompanyPerson] = useState('')
  const [text, setText] = useState('')

  const [submitOnclick, setSubmitOnclick] = useState(false)

  const formSubmit = (e) => {
    e.preventDefault()
    setSubmitOnclick(true)
    if(!selectedRegion || !selectedDistrict || !companyName || !companyLevel || !companyPerson || !text) return


    const data = {
      "company_name": companyName,
      "company_level": companyLevel,
      "company_person": companyPerson,
      "text": text,
      "region_id": selectedRegion.id,
      "district_id": selectedDistrict.id
  }
    props.createAppeal(data)
  }

  useEffect(() => {
    if(props.sendingStatus==="success") push('/main')
  }, [props.sendingStatus])

  useEffect(() => {
    return function cleanup () {
      props.setDistrictsList([])
      props.setSendingStatus('')
    }
  }, [])

  useEffect(() => {
    if(selectedRegion) props.updateDistictsList(selectedRegion.id)
  }, [selectedRegion])

  return (
    <>
      <AnonimForm 
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedDistrict={selectedDistrict}
        setSelectedDistrict={setSelectedDistrict}
        companyName={companyName}
        setCompanyName={setCompanyName}
        companyLevel={companyLevel}
        setCompanyLevel={setCompanyLevel}
        companyPerson={companyPerson}
        setCompanyPerson={setCompanyPerson}
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
  createAppeal,
  setDistrictsList,
  setSendingStatus
}

const mapStateToProps = (state) => ({
  regionsList: state.form.regionsList,
  districtsList: state.form.districtsList,
  sendingStatus: state.form.sendingStatus
})

export default connect(mapStateToProps, mapDispatchToProps)(AnonimFormContainer)