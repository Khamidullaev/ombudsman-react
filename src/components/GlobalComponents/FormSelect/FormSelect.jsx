import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './FormSelect.scss'

const FormSelect = ({placeholder, options, onChange, submitOnclick}) => {
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState('')
  const language = useSelector(state=>state.app.language)

  useEffect(() => {
    onChange(value)
  }, [value, onChange])

  return (
    <div className={`FormSelect ${value ? 'filled' : ''} ${focus ? 'active' : ''} ${!value && submitOnclick ? 'wrong' : ''}`} onClick={()=>setFocus(prev=>!prev)}>
      <p className="label">{placeholder}</p>
      <p className="value">{value ? value.name[language] : ""}</p>
      <div className="arrow"><FontAwesomeIcon icon={faSortDown} /></div>
      <div className="line" />

      <div className="dropdown">
        {
          options.map(option=>(
            <div className="dropdown-element" key={option.id} onClick={()=>setValue(option)}>{option.name[language]}</div>      
          ))
        }
     
      </div>

    </div>
  )
}

export default FormSelect