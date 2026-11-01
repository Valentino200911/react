
function Input({name, inputText, id, type, value, placeholder, onChange}) {
  return (
    <>

    <label htmlFor={name} className="faculty-glyphic-regular">{inputText}</label>
    
    <input  
    type={type} 
    id={id} 
    name={name} 
    value={value} 
    placeholder={placeholder} 
    required 
    className="faculty-glyphic-regular"
    onChange = {onChange}
    />
    
    </>
  )
}

export default Input