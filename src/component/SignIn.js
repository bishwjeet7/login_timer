import React, { useEffect, useState } from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import google from './google.png';
import Home from "./Home";
import './SignIn.css'
import { Link,useNavigate  } from "react-router-dom";

function SignIn(){
    const navigate = useNavigate()
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

return (
    <div>
         <div className="home">
      <div className="name">
        <h1 className="welcome">Welcome</h1>
      </div>
      <div className="authenticate">
        <div className="content">
          <h2>Sign in</h2>
          <div className="form">
            <form>
              <div>
                <label htmlFor="">Email address</label>
                <input type="email" placeholder="Username" />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Password" />
              </div>
              <a href="/" className="forget-pass">
                Forgot password?
              </a>
              <button className="sign-in-btn">Sign in</button>
            </form>
              {value?navigate('Home'):
                    <button className="googlesignin" onClick={handleClick}><img src={google} alt="google" />
                    <span>Sign in with Google</span></button>
              }
          </div>
          <p className="register-link">
            Dont't have an account? <a href="/">Register here</a>
          </p>
        </div>
      </div>
    </div>
    </div>
);
}
export default SignIn;
