import React from 'react'
import './Date.css'
import { UserContext } from '../../context/UserContext'
import { useContext } from 'react'
const Date = () => {
  const {filteredAge,setFilteredAge,} =useContext(UserContext)
  
  return (
    <div className='date-filter'>
      <select onChange={e =>setFilteredAge(e.target.value)}>
        
     
        <option value="all" >all ages</option>
        <option value='0-30'>0-30</option>
        <option value='31-35'>31-35</option>
        <option value='36-60'>36-60</option>
        
        
      </select>
    
  </div>
  )
}

export default Date




       
 



