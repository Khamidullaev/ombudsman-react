import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { updateAppealDetail } from "../../redux/actions/adminActions"


const AppealDetailForm = () => {
  const {id} = useParams()
  const appealDetail = useSelector(state=>state.admin.appealDetail)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(()=> {
    dispatch(updateAppealDetail(id))
  }, [id])
  
  return (
    <div className="AppealDetailForm AdminForm">
      <div onClick={()=>history.goBack()}  className="cancel-button"><FontAwesomeIcon icon={faArrowCircleLeft}/></div>
      <h2 className="title" style={{textAlign: "center", marginBottom: '30px'}}>Anonim murojaat</h2>
      <p className="text"><b>Qaysi davlat organiga mansubligi: </b>{appealDetail.company_name}</p>
      <p className="text"><b>Organ darajasi: </b>{appealDetail.company_level}</p>
      <p className="text"><b>Mansabdor shaxs ism sharifi: </b>{appealDetail.company_person}</p>
      {appealDetail.region && <p className="text"><b>Shahar: </b>{appealDetail.region.name.oz}</p>}
      {appealDetail.district && <p className="text"><b>Tuman: </b>{appealDetail.district.name.uz}</p>}
      <p className="text"><b>Holat yuzasidan ma'lumot: </b>{appealDetail.text}</p>

    </div>
  )
}

export default AppealDetailForm