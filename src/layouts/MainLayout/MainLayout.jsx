import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import LanguageSelector from '../../components/GlobalComponents/LanguageSelector/LanguageSelector'
import SocialBtn from '../../components/GlobalComponents/SocialBtn/SocialBtn'
import './MainLayout.scss'

const MainLayout = ({children}) => (
  <div className="MainLayout">
    <div className="blackout">
      <div className="main-block">
        {children}
      </div>
      <div className="settings-block">
        <LanguageSelector />
      </div>
        <Link to="/login" className="loginLink">Kirish<FontAwesomeIcon className="icon" icon={faSignInAlt}/></Link>
    </div>
    <SocialBtn />
  </div>
)

export default MainLayout