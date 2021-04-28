import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAlertMessage } from '../../../redux/reducers/appReducer'
import './Alert.scss'

const TIME = 4000

let timeoutId

const Alert = () => {
  const alertMessage = useSelector(state=>state.app.alertMessage)
  const dispatch = useDispatch()

  useEffect(() => {
    if(!alertMessage.type) return;
    clearTimeout(timeoutId)
    
    timeoutId = setTimeout(() => {
      dispatch(setAlertMessage({type: null}))
    }, TIME);
    
  }, [alertMessage])

  if(!alertMessage.type) return null
  return (
    <div className={`Alert ${alertMessage.type}`}>
      <p className="message">
        {alertMessage.message}
      </p>
      <div className="line" style={{animationDuration: `${TIME}ms`}} />
    </div>
  )
}

export default Alert