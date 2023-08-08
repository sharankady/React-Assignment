import React from 'react'
import './Search.css'

import { UserContext } from '../../context/UserContext'
import { useContext } from 'react'

const Search = () => {

  const {userData,search,setSearch} = useContext(UserContext)  
  return (
    <div className='search'>
        <input 
        placeholder='Search'
       
        value={search}
        onChange={e => setSearch(e.target.value)}
        >
        
        
        </input>
    </div>
  )
}

export default Search