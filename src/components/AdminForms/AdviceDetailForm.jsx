import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { updateAdviceDetail } from "../../redux/actions/adminActions"


const AdviceDetailForm = () => {
  const {id} = useParams()
  const adviceDetail = useSelector(state=>state.admin.adviceDetail)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(()=> {
    dispatch(updateAdviceDetail(id))
  }, [id])
  
  return (
    <div className="AdviceDetailForm AdminForm">
      <div onClick={()=>history.goBack()}  className="cancel-button"><FontAwesomeIcon icon={faArrowCircleLeft}/></div>
      <h2 className="title" style={{textAlign: "center", marginBottom: '30px'}}>Huquqiy maslahat</h2>
      <p className="text"><b>Ism sharifi: </b>{adviceDetail.full_name}</p>
      <p className="text"><b>Telefon raqami: </b>{adviceDetail.phone}</p>
      {adviceDetail.region && <p className="text"><b>Shahar: </b>{adviceDetail.region.name.oz}</p>}
      {adviceDetail.district && <p className="text"><b>Tuman: </b>{adviceDetail.district.name.uz}</p>}
      <p className="text"><b>Holat yuzasidan ma'lumot: </b>{adviceDetail.text}</p>

    </div>
  )
}

export default AdviceDetailForm