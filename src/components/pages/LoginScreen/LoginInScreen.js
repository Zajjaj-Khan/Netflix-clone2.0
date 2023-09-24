import React, { Fragment, useState } from 'react'
import '../../../Css/logInScreen.css'
import SignUpScreen from './SignUpScreen'
const LoginInScreen = () => {
  const [signIn,setSignIn] = useState(false)
  return (
    <div className='loginScreen'>
        <div className='loginScreen-background'>
            <img className="loginScreen-logo"src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt='netflix-img'/>
            <button className='loginScreen-btn' onClick={()=>setSignIn(true)} > Sign In</button>
            <div className='loginScreen-gradient'/></div>
             <div className='loginScreen-body'>
             {signIn?<SignUpScreen/> :  <Fragment>
                <h1>Unlimited films,TV programs and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>
                  Ready to watch? Enter your Email to create or restart your membership
                </h3>
                <div className='loginScreen-input'>
                  <form>
                    <input type='email'placeholder='Email Address'/>
                    <button 
                    onClick={()=>setSignIn(true)}
                    className='loginScreen-getStarted'>GETSTARTED</button>
                  </form>
                </div>
              </Fragment>
            }
            </div>
            
        </div>
  )
}

export default LoginInScreen