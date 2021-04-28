import { FormattedMessage, useIntl } from 'react-intl'
import BtnsRow from './BtnsRow/BtnsRow'
import './SearchBlock.scss'

const SearchBlock = () => {
  const intl = useIntl()

  return (
    <div className="SearchBlock">
      <h1 className="title"><FormattedMessage id="mainPage_business-ombudsman"/></h1>
      <div className="search-box">
        <input type="text" className="search-input" placeholder={intl.formatMessage({id: "mainPage_search"})}/>
      </div>
      <BtnsRow />
    </div>
  )
}

export default SearchBlock