import { Fragment } from 'react'
import { IntlProvider } from 'react-intl'
import ru from './languages/ru-RU.json'
import oz from './languages/uz-Latn-UZ.json'
import uz from './languages/uz-Cyrl-UZ.json'
import { useSelector } from 'react-redux'

const messages = {
  ru, oz, uz
}

const LocalizationProvider = ({children}) => {
  const locale = useSelector(state => state.app.locale)
  const language = useSelector(state => state.app.language)

  return (
    <IntlProvider 
      locale={locale}
      textComponent={Fragment}
      messages={messages[language]}
    >
      {children}
    </IntlProvider>
  )
}

export default LocalizationProvider