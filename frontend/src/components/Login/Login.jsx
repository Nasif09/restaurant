import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'


const Login = ({setShowLogin}) => {
    const [currentState, setState] = useState("Login")

  return (
    <div className='login'>
      <div className="login-container">
        <div className="login-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="inputfield">
                {
                    currentState === "Login" 
                    ? <></> 
                    : <input type="text" name="name" placeholder='Your name?' id="" required/>
                }
                <input type="email" name="email" id="" placeholder='Your email' required/>
                <input type="password" name="password" id="" placeholder='Password' required/>
            </div>
            <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
            <div className="terms-condition">
                <input type="checkbox" required/>
                <p>By continuing. I agree to the terms of use & privacy policy.</p>
            </div>
            {
                currentState === "Login"
                ? <p>Create a new account? <span onClick={()=>setState("Sign Up")}>Click here</span></p>
                : <p>Already have an account? <span onClick={()=>setState("Login")}>Login here</span></p>
            }
      </div>
    </div>
  )
}

export default Login
