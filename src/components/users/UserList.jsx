import React from 'react'
import './UserList.css'


const UserList = ({user}) => {
  return (
    <div className='table-data'>
        <li>
            <div className='table-data-item name'>
                 <div>
                 <img src={user.picture.thumbnail}></img> 
                 </div>
               
                <div>
                <h5>{user.name.first} {user.name.last}</h5> 
                </div>
                
            </div>
            <div className='table-data-item'>
                 <p>{user.location.city}</p>  
            </div>
            <div className='table-data-item'>
                <p>{user.cell}</p>
            </div>
            <div className='table-data-item'>
                <p>{user.gender}</p>
            </div>
            <div className='table-data-item'>
                 <p>{user.dob.age}</p> 
            </div>
            <div className='table-data-item'>
                <p>{user.nat}</p>
            </div>
        </li>

    </div>
  )
}

export default UserList