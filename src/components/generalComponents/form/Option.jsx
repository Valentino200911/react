import React from 'react'

function Option({name, id, value, isDisabled, optionText, isSelected}) {
  return (
    <>

    <option
    name={name}
    id={id} 
    value={value} 
    disabled={isDisabled ? true : false}
    selected={isSelected ? true : false}
    className='faculty-glyphic-regular'
    >{optionText}</option>
    
    </>
  )
}

export default Option