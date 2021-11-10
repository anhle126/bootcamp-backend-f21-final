import React from "react"

const Select = (props) => {
  const {
    options, // list of options
    label, // name of the select
    curr, // currently selected value
    onChange // when something is selected
  } = props

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select name={label} value={curr} onChange={(e) => onChange(e.target.value)}>
        <option value="">None</option>
        {options.map((o,i)=><option key={`${label}-${i}`}value={o}>{o}</option>)}
      </select>
    </div>
  )
}

export default Select
