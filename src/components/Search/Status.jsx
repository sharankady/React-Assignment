import React from 'react'
import './Status.css'

import { UserContext } from '../../context/UserContext'
import { useContext } from 'react'
const Status = () => {

  const {setfilteredGender} = useContext(UserContext)

 
  return (
    
    <div className='status-filter'>
      
      <select   onChange={e =>setfilteredGender(e.target.value)} >
        
        <option value="all" >all</option>
        <option value='female'>female</option>
        <option value='male'>male</option>
        
      </select>
    </div>
  
  )
}

export default Status