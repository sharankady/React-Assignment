import React from 'react'
import { NavLink } from 'react-router-dom'

import { BiSolidDashboard } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { HiLibrary } from "react-icons/hi";

import { MdSecurity } from "react-icons/md";
import { GrSchedules } from "react-icons/gr";
import { GiPayMoney } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
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