import React from 'react'
import './RecentItem.css'

const RecentItem = ({recent}) => {
    
  return (
    <li className='item'>
        <div className='item-row'>
            
                <div className="item-icon">
               <img src= {recent.icon}></img>
            </div>
            <div className="item-details">
                <h5>{recent.name}</h5>
                <h5>{recent.date}</h5>

            </div>
            
            
        </div>
        <div className='item-cost'>
                <h2>-${recent.cost}</h2>
            </div>
    </li>
  )
}

export default RecentItem