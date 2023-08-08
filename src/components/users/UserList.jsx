import React from 'react'
import './Userlist.css'


const UserList = ({user}) => {
  return (
    <div className='table-data'>
        <li>
            <div className='table-data-item name'>
                 <img src={user.picture.thumbnail}></img> 
                <h4>{user.name.first}</h4> 
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