import { faUnlockAlt, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../../redux/actions/userActions'
import { setPasswordIsWrong } from '../../redux/reducers/userReducer'
import './LoginForm.scss'

const LoginForm = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const passwordIsWrong = useSelector(state=>state.user.passwordIsWrong)

  const formSubmit = (e) => {
    e.preventDefault()
    dispatch(loginAction(login, password))
  }

  useEffect(() => {
    if(!passwordIsWrong) return;
    dispatch(setPasswordIsWrong(false))
  }, [login, password])

  return (
    <div className="LoginForm">
      <form onSubmit={formSubmit}>
        <h2 className="title">Administrator paneliga kirish</h2>
        <div className="inputs-block">
          <div className="input-wrapper" className={`input-wrapper ${passwordIsWrong ? "wrong" : ""}`}>
            <input type="text" placeholder="Login" value={login} onChange={e=>setLogin(e.target.value)} />
            <FontAwesomeIcon icon={faUserTie} className="icon"  />
          </div>
          <div className={`input-wrapper ${passwordIsWrong ? "wrong" : ""}`}>
            <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <FontAwesomeIcon icon={faUnlockAlt} className="icon" />
          </div>
        </div>
        <div className="btns-row">
          <button className="btn">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm