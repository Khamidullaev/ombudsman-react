import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { setLocale } from '../../../redux/reducers/appReducer'
import './LanguageSelector.scss'

const LanguageSelector = () => {
  const language = useSelector(state=>state.app.language)
  const dispatch = useDispatch()

  const changeLanguage = () => {
    let newLocale

    switch (language) {
      case "uz":
        newLocale = {
          locale: "uz-Latn-UZ",
          language: 'oz'
        }
        break;
      case "ru":
        newLocale = {
          locale: "uz-Cyrl-UZ",
          language: 'uz'
        }
        break;

      default:
        newLocale = {
          locale: 'ru-RU',
          language: 'ru'
        }
    }

    dispatch(setLocale(newLocale.locale, newLocale.language))
  }

  return (
    <div className="LanguageSelector" onClick={changeLanguage} >
      <FontAwesomeIcon icon={faGlobe} className="icon"/>
      <p className="name">{
        language === 'uz'
          ?
            "Уз"
          : language === 'oz'
            ?
              "O'z"
            :
              "Ru"
      }</p>
    </div>
  )
}

export default LanguageSelector