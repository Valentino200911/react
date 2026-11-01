
function Button({type, id, buttonText, className, onClick}) {
  
  return (
    <>
    
    <button type={type} 
    id={id} 
    className={className} 
    onClick={onClick}>{buttonText}</button>

    </>
  )
}

export default Button