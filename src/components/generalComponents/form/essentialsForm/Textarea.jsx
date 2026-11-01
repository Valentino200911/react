
function Textarea({id, label, placeholder, value, onChange}) {
  return (
    <>

    <div className="areaContainer">

    <label htmlFor={id} className="faculty-glyphic-regular">{label}</label>

    <textarea 
    name={id}
    id={id} 
    placeholder={placeholder} 
    value={value} 
    className="faculty-glyphic-regular"
    onChange={onChange}></textarea>

    </div>
    
    </>
  )
}

export default Textarea