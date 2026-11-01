
function SelectorInput({selectorText, name, value, nameId, onChange}) {
  return (
    <>

        <label htmlFor={nameId} className="faculty-glyphic-regular">{selectorText}</label>

        <input
            type="radio"
            id={nameId}
            name={nameId}
            value={value}
            className="selector faculty-glyphic-regular"
            required
            onChange={onChange}
        />    
    
    </>
  )
}

export default SelectorInput