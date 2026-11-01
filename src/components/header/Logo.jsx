import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo() {
  return (
    <li>

    <NavLink to="/">
    
    <img src="/logo.png" alt="Cabañas Aguaribay" className="logo" />
    
    </NavLink>

    </li>
  )
}

export default Logo