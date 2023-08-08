import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginCard.css'

import { AuthContext } from '../../context/AuthContext'


import { useState } from 'react'

import { useContext } from 'react'


const LoginCard = () => {
    const navigate =useNavigate()

    const {signIn}=useContext(AuthContext)

   
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [error,setError] =useState(null)

    const login = async (e) => {
        e.preventDefault()  
        
        try {
           await  signIn(email,password)
            navigate('/app/dashboard')
        } catch (error) {
            setError(error)
            console.log(error)
        }
        
    }
       
    return (
        <div className="card">
            <h3 >Welcome!</h3>
            <form className="form" onSubmit={login}  >
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
                <p ><Link>Forgot your password? </Link></p>
                <input type="checkbox" id="rememberme"  />
                <label className="rememberme" htmlFor="rememberme"> Remember me next time</label>
                <div>
                <button className="btn">Sign in</button>
                </div>
            </form>
            <p className="signup">New user? <Link to="/signup">Sign up? </Link></p>
        </div>
    )
}

export default LoginCard


