import { useEffect, useState } from 'react'
import './FormInput.scss'

const FormInput = ({id, placeholder, onChange, submitOnclick}) => {
  const [value, setValue] = useState('')
  
  useEffect(()=>{
    onChange(value)
  }, [value, onChange])

  return (
    <div className={`FormInput ${!value && submitOnclick ? 'wrong' : ''}`}>
      <input type="text" className={`${value ? 'filled' : ''}`} id={`input-${id}`} value={value} onChange={(e)=>setValue(e.target.value)}/>
      <label className="label" htmlFor={`input-${id}`}>{placeholder}</label>
      <div className="line-wrapper">  
        <div className="line" />
      </div>
    </div>
  )
}

export default FormInput