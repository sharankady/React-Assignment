import React from 'react'

import SidebarItems from './SidebarItems'
import  './Sidebar.css'
import Logo from '../Logo/Logo'
import { Footer } from './Footer'

const Sidebar = () => {
  return (
    <div className="sidebar">
       <Logo/>
       <SidebarItems/>
       <Footer/>

    </div>
  )
}

export default Sidebar