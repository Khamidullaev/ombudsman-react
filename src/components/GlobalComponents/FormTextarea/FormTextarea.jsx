import { useEffect, useState } from 'react'
import './FormTextarea.scss'

const FormTextarea = ({id, placeholder, onChange, submitOnclick}) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    onChange(value)
  }, [value, onChange])

  return (
    <div className={`FormTextarea ${!value && submitOnclick ? 'wrong' : ''}`}>
      <textarea rows="5" id={`textarea-${id}`} className={`${value ? 'filled' : ''}`} value={value} onChange={(e)=>setValue(e.target.value)}/>
      <div className="line-wrapper"><div className="line" /></div>
      <label className="label" htmlFor={`textarea-${id}`}>{placeholder}</label>
    </div>
  )
}

export default FormTextarea