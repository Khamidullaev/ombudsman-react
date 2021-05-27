import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setIsAuth } from '../../redux/reducers/userReducer'
import './AdminHeader.scss'

const AdminHeader = () => {
  const dispatch = useDispatch()

  const signUp = () => {
    localStorage.removeItem('isAuth')
    dispatch(setIsAuth(false))
  }

  return (
    <div className="AdminHeader">
      <div className="left-side">
        <h1 className="title">Administrator paneli</h1>
      </div>

        <div className="right-side">
          <div className="navbar">
            <NavLink activeClassName="active" to="/admin/appeal" className="navbar-element">Anonim murojaat</NavLink>
            <NavLink activeClassName="active" to="/admin/advice" className="navbar-element">Huquqiy maslahat</NavLink>
          </div>
          <div className="btn-block">
            <button className="signUp-btn" onClick={signUp}><FontAwesomeIcon icon={faSignOutAlt}/>Chiqish</button>
          </div>
        </div>

    </div>
  )
}

export default AdminHeader