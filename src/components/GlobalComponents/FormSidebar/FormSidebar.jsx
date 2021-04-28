import './FormSidebar.scss'
import emblem from '../../../assets/images/emblem-uzbekistan.png'
import { FormattedMessage } from 'react-intl'

const FormSidebar = () => (
  <div className="FormSidebar">
    <img className="emblem" src={emblem} alt="emblem-uzbekistan"/>
    <p className="title"><FormattedMessage id="form_sidebar-text"/></p>

  </div>
)

export default FormSidebar