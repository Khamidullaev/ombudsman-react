import FormInput from "../GlobalComponents/FormInput/FormInput"
import FormSelect from "../GlobalComponents/FormSelect/FormSelect"
import FormSidebar from "../GlobalComponents/FormSidebar/FormSidebar"
import emblem from '../../assets/images/emblem-uzbekistan.png'
import FormTextarea from "../GlobalComponents/FormTextarea/FormTextarea"
import { useHistory } from "react-router"
import { FormattedMessage, useIntl } from "react-intl"

const AdviceForm = (props) => {
  const { push } = useHistory()
  const intl = useIntl()

  return (
    <div className="AdviceForm form-wrapper">

      <FormSidebar />

      <form onSubmit={props.formSubmit}>
        <h2 className="title"><FormattedMessage id="mainPage_link_advice"/></h2>
        <h2 className="small-title text"><FormattedMessage id="form_sidebar-text"/></h2>
        <img src={emblem} className="emblem" alt="emblem-uzbekistan"/>
        <p className="text"><FormattedMessage id="advice-form_title1"/>:</p>
        <div className="inputs-block">
          <FormSelect submitOnclick={props.submitOnclick} onChange={props.setSelectedRegion} placeholder={intl.formatMessage({id: "form_region"})} options={props.regionsList}/> 
          <FormSelect submitOnclick={props.submitOnclick} onChange={props.setSelectedDistrict} placeholder={intl.formatMessage({id: "form_district"})} options={props.districtsList}/> 
        </div>
        <p className="text"><FormattedMessage id="advice-form_title2"/>:</p>
        <div className="inputs-block">
          <FormInput submitOnclick={props.submitOnclick} id={1} onChange={props.setFullName} placeholder={intl.formatMessage({id: "advice-form_person-name"})}/>
          <FormInput submitOnclick={props.submitOnclick} id={2} onChange={props.setPhone} placeholder={intl.formatMessage({id: "advice-form_tel-number"})}/>
        </div>
        <div className="inputs-block">
          <FormTextarea submitOnclick={props.submitOnclick} onChange={props.setText} id={3} placeholder={intl.formatMessage({id: "anonim-form_text"})}/>
        </div>

        <div className="btns-row">
          <button onClick={()=>push('/main')} type="button" className="btn cancel"><FormattedMessage id="form_cancel"/></button>
          <button type="submit" className="btn submit"><FormattedMessage id="form_send"/></button>
        </div>
      </form>
    </div>  
  )
}

export default AdviceForm