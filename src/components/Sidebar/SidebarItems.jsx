import React from 'react'
import { NavLink } from 'react-router-dom'

import { BiSolidDashboard } from "react-icons/Bi";
import { FiActivity } from "react-icons/Fi";
import { HiLibrary } from "react-icons/Hi";

import { MdSecurity } from "react-icons/Md";
import { GrSchedules } from "react-icons/Gr";
import { GiPayMoney } from "react-icons/Gi";
import { IoIosSettings } from "react-icons/Io";
import './SidebarItems.css'

const SidebarItems = () => {
    return (
        <div>
            <ul className="sidebaritems">
                <li className="sidebaritems-list">
                    <div className="sidebaritems-list-item">
                    <span>{<BiSolidDashboard />}</span>
                    <NavLink to='dashboard'>Dashboard</NavLink>
                    </div>
                </li>
                <li className="sidebaritems-list">
                    <div className="sidebaritems-list-item">
                    <span>{<FiActivity/>}</span>
                    <NavLink to='activity'>Activity</NavLink>
                    </div>
                </li>
                <li className="sidebaritems-list">
                    <div className="sidebaritems-list-item">
                    <span>{<HiLibrary/>}</span>
                    <NavLink to='library'>Library</NavLink>
                    </div>
                </li>
                <li className="sidebaritems-list">
                    <div className="sidebaritems-list-item">
                    <span>{<MdSecurity/>}</span>   
                    <NavLink to='security'>Security</NavLink>
                    </div>
                </li>
                <li className="sidebaritems-list">
                    <div className="sidebaritems-list-item">
                    <span>{<GrSchedules />}</span>
                    <NavLink to='schedules'>Schedules</NavLink>
                    </div>
                </li>
                <li className="sidebaritems-list">
                    <div className="sidebaritems-list-item">
                    <span>{<GiPayMoney/>}</span>
                    <NavLink to='payouts'>Payouts</NavLink>
                    </div>
                </li>
                <li className="sidebaritems-list">
                    <div className="sidebaritems-list-item">
                    <span>{<IoIosSettings/>}</span>
                    <NavLink to='settings'>Settings</NavLink>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}

export default SidebarItems