import React from 'react'

import logo from '../../../public/logo.png'
import './Logo.css'

const Logo = () => {
  return (
    <div className="sidebar-logo">
        <div className="header">
        <img src={logo}></img>
        <div className="header-text">
            <span>FOOBAR</span>
            <span>DASHBOARD</span>
        </div>
        </div>

       
    </div>
  )
}

export default Logo

