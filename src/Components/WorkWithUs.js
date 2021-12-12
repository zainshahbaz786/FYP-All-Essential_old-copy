import React from 'react'

const WorkWithUs = () => {
    return (
        <>
<div className="workwithus">

         <h1 style={{color:'green', textAlign:"center", fontSize:"30px" }}>Register Yourself Here</h1> 

         <h2  style={{color:'blue', textAlign:"center",fontSize:"25px"}}>Sign Up to be our Part</h2>

         <div className="simpsignup">
    <div id="login-box">
        <div className="left">
          <h1>Sign up</h1>
          
          <input type="text" name="username" className="signupInput" placeholder="Username" />
          <input type="text" name="email" className="signupInput" placeholder="E-mail"/>
          <input type="text" name="phone" className="signupInput" placeholder="Mobile Phone" />
           <input type="text" name="address" className="signupInput" placeholder="Address" /> 
          <input type="password" name="password" className="signupInput" placeholder="Password" />
          <input type="password" name="password2" className="signupInput"  placeholder="Retype password" />
          
          <input type="submit" name="signup_submit" value="Sign me up" />
        </div>
        
        <div class="right">
          <span className="loginwith">Sign in with<br />social network</span>
          
          <button className="social-signin facebook">Log in with facebook</button>
          <button className="social-signin twitter">Log in with Twitter</button>
          <button className="social-signin google">Log in with Google+</button>
        </div>
        <div className="or">OR</div>
      </div>

    </div>



    </div>
        </>
    )
}

export default WorkWithUs
