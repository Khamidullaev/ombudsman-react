import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import './LinkBtn.scss'



const LinkBtn = ({link}) => (
  <div className="LinkBtn">
    <Link 
      to={link.to} 
      className="link" 
    >
        <p className="text"><FormattedMessage id={link.languageId} /> </p>
    </Link>
  </div>
)

export default LinkBtn