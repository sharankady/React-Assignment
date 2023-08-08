import React from 'react'
import './Table.css'
import UserList from './UserList'


 
import { UserContext } from '../../context/UserContext'
import { useContext } from 'react'

const tableHeading =['Author','City','Phone Number','Gender','age','Nationality']
const Table = () => {

  const { userData,search,filteredGender,filteredAge,isLoading,error } = useContext(UserContext)
    
  

  const filteredUsers = userData.filter((user) => {
    
    const genderhandler =
      filteredGender === 'female' && user.gender === "female" ||
                           
      filteredGender === 'male'  && user.gender === "male" ||
      filteredGender === 'all'  && user 
    
      const ageHandler =
      filteredAge === '0-30' && (Number(user.dob.age) <=30 ) ||
      filteredAge === '31-35' && (Number(user.dob.age) <=35 &&  Number(user.dob.age) >=31) ||
      filteredAge === '36-60' && (Number(user.dob.age) <=60 &&  Number(user.dob.age) >=36) || 
      filteredAge === 'all' && user
         
  
    const searchHandler =
    search.toLowerCase() === '' ? user :
      user.name.first.toLowerCase().includes(search);
  
    return genderhandler && searchHandler && ageHandler;
  });
  
  
  if(isLoading) return  <h2 style={{fontSize:'50px',textAlign:'center'}}>Loading Data....</h2>
  if(error) return <p>Error: {error.message}</p>

  return (
    <div className='table'>
        <div className='table-heading'>
            {tableHeading.map(heading =>(
                <h5>{heading}</h5>
            ))}

        </div>

        <div className='table-main'>
           <ul>
           
           {
           filteredUsers?.
           map(user => (
                <UserList user={user}/> 
                ))}
           </ul>

        </div>
        </div>
  )
}

export default Table


