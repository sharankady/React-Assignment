import React from 'react'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignupCard.css'


import {AuthContext} from '../../context/AuthContext'
 
import { useContext } from 'react'


const SignupCard = () => {
const {createUser} =useContext(AuthContext)

    const navigate =useNavigate()
    

    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [error,setError] =useState(null)

    

    const signUp = async (e) => {
        e.preventDefault()
        
        try {
           await createUser(email,password)
            navigate('/app/dashboard')
        }catch (error) {
            setError(error)
            console.log(error)
        }

    }

    
    return (
        <div className="card">
            <h3 >Welcome!</h3>
            <form className="form" onSubmit={signUp} >
                <div className="form-item">
                    <label htmlFor='email'>Email</label>
                    <input 
                    id="email" 
                    type="text" 
                    placeholder='Enter your Email' 
                    required
                     value={email}
                     onChange={(e) => setEmail(e.target.value) }
                    ></input>
                </div>
                <div className="form-item">
                    <label htmlFor='password'>Password</label>
                    <input
                     id="password" 
                     type="password" 
                     placeholder='Enter your Password' 
                     required 
                     value={password}
                     onChange={(e) => setPassword(e.target.value) } 
                         
                    ></input>
                    <p style={{color:"red"}}>{error? "Invalid Email or password!!":""}</p>
                </div>
                
                
                <div>
                <button type="submit" className="btn">Sign up</button>
                </div>
            </form>
            <p className="signup">Have an Account ? <Link to="/">Log In? </Link></p>
        </div>
    )
}

export default SignupCard


