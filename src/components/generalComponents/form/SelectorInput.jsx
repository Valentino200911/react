
function SelectorInput({selectorText, name, value, id, onChange}) {
  return (
    <>

        <label htmlFor={id} className="faculty-glyphic-regular">{selectorText}</label>

        <input
            type="radio"
            id={id}
            name={name}
            value={value}
            className="selector faculty-glyphic-regular"
            required
            onChange={onChange}
        />    
    
    </>
  )
}

export default SelectorInput