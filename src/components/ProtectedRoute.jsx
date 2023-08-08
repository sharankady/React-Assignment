import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'


const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    console.log(user)

    if (!user) {
        return(
            <Link to="/" />
        ) 
        
    }
    return children

  
}

export default ProtectedRoute