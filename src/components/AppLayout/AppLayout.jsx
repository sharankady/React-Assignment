import React from 'react'
import { Outlet } from 'react-router-dom'
import  './AppLayout.css'
import Sidebar from '../Sidebar/Sidebar'


const AppLayout = () => {
  return (
    <div className="applayout">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="outlet">
                <Outlet/>
            </div>
            
        </div>
  )
}

export default AppLayout