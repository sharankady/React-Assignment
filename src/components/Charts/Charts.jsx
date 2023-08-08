import React, { useContext } from 'react'
import Medium_Earnings from './Medium_Earnings'
import Small_transactions from '../SmallTransactions/Small_Transactions'
import Medium_Chart from './Medium_Chart'
import './Charts.css'
import { useNavigate } from 'react-router-dom'


import {AuthContext} from '../../context/AuthContext'

const Charts = () => {

  const {logout,user} =useContext(AuthContext)
  const email = (user.email).split('@')
  const name = email[0]
  

  const  navigate = useNavigate()
  const handleClick =() => {
   try {
    logout()
    navigate('/')
    console.log("you are logged out")
   } catch (error){
    console.log(error.message)
   }
  }
  return (
    <div>
      <div className="charts-message">
         <div>
         <h3>Hi There,</h3>
         <h1>Welcome to your Dashboard!</h1>
         </div>
         <div>
           <p onClick={handleClick}>Logout ({name}) </p>
         </div>
      </div>
       <div className="charts-data">   
      <Medium_Earnings/>
      <Small_transactions/>
      <Medium_Chart/>
    </div>
    </div>
    
   
  )
}

export default Charts