import './AnonimForm.scss'
import FormSidebar from '../GlobalComponents/FormSidebar/FormSidebar'
import FormSelect from '../GlobalComponents/FormSelect/FormSelect'
import FormInput from '../GlobalComponents/FormInput/FormInput'
import FormTextarea from '../GlobalComponents/FormTextarea/FormTextarea'
import emblem from '../../assets/images/emblem-uzbekistan.png'
import { useHistory } from 'react-router'
import { FormattedMessage, useIntl } from 'react-intl'

const AnonimForm = (props) => {
  const {push} = useHistory()
  const intl = useIntl();


  return (
  <div className="AnonimForm form-wrapper">
    
    <FormSidebar />

    <form onSubmit={props.formSubmit}>
      <h2 className="title"><FormattedMessage id="mainPage_link_anonim-appeal"/></h2>
      <h2 className="small-title text"><FormattedMessage id="form_sidebar-text"/> </h2>
      <img src={emblem} className="emblem" alt="emblem-uzbekistan"/>
      <p className="text"><FormattedMessage id="anonim-form_title-1"/> :</p>
      <div className="inputs-block">
      <FormSelect submitOnclick={props.submitOnclick} onChange={props.setSelectedRegion} placeholder={intl.formatMessage({id: "form_region"})}  options={props.regionsList}/> 
      <FormSelect submitOnclick={props.submitOnclick} onChange={props.setSelectedDistrict} placeholder={intl.formatMessage({id: "form_district"})}  options={props.districtsList}/> 
      </div>
      <p className="text"><FormattedMessage id="anonim-form_title-2"/>:</p>
      <div className="inputs-block">
        <FormInput submitOnclick={props.submitOnclick} onChange={props.setCompanyName} id={1} placeholder={intl.formatMessage({id: "anonim-form_company-name"})}/>
        <FormInput submitOnclick={props.submitOnclick} onChange={props.setCompanyLevel} id={2} placeholder={intl.formatMessage({id: "anonim-form_company-level"})}/>
      </div>
      <div className="inputs-block">
        <FormInput submitOnclick={props.submitOnclick} onChange={props.setCompanyPerson} id={3} placeholder={intl.formatMessage({id: "anonim-form_person"})}/>
      </div>
      <div className="inputs-block">
        <FormTextarea submitOnclick={props.submitOnclick} onChange={props.setText} id={4} placeholder={intl.formatMessage({id: "anonim-form_text"})}/>
      </div>

      <div className="btns-row">
        <button onClick={()=>push('/')} type="button" className="btn cancel"><FormattedMessage id="form_cancel"/></button>
        <button type="submit" className="btn submit"><FormattedMessage id="form_send"/></button>
      </div>
    </form>
  </div>
)
}

export default AnonimForm