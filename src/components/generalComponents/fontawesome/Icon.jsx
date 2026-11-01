import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icon({icon, iconColor}) {
  return (
    <>
    
    <FontAwesomeIcon icon={icon} style={{color: iconColor}}/>
    
    </>
  )
}

export default Icon