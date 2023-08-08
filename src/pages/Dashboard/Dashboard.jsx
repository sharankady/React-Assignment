import React from 'react'


import Charts from '../../components/Charts/Charts'
import Users from '../../components/users/Users'
import './Dashboard.css'


const Dashboard = () => {
    return (
        
            <div className="charts-users" >
                <div className="charts"><Charts /></div>
                <div className="users"><Users /></div>
            </div>
        
    )
}

export default Dashboard    