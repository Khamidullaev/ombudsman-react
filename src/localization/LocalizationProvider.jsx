import { Fragment } from 'react'
import { IntlProvider } from 'react-intl'
import ruRU from './languages/ru-RU.json'
import uzLatnUZ from './languages/uz-Latn-UZ.json'
import uzCyrlUZ from './languages/uz-Cyrl-UZ.json'

const messages = {
  'ru-RU': ruRU,
  'uz-Latn-UZ': uzLatnUZ,
  'uz-Cyrl-UZ': uzCyrlUZ
}

const LocalizationProvider = ({children}) => {
  const locale = 'ru-RU'

  return (
    <IntlProvider 
      locale={locale}
      textComponent={Fragment}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  )
}

export default LocalizationProvider