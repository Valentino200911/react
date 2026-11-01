
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from '../generalComponents/fontawesome/Icon'

function RouteNavList({icon, iconColor, navText, route}) {
  return (
    <li>


       <NavLink to={route} 
       className='domine-bold'>

        <Icon
        icon={icon}
        iconColor={iconColor} />
      
        {navText}
        
        </NavLink>

    </li>

  );
};

export default RouteNavList;