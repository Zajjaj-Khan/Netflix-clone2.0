import React,{useRef} from 'react'
import '../../../Css/signUpScreen.css'
const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const register = (e) =>{
    e.preventDefault();
  }
  const signIn = (e) =>{
    e.preventDefault()
  }
  return (
    <div className='signUp-Screen'>
      <h1>Sign In</h1>
      <form>
      <input placeholder='Email'type='email'/>
      <input placeholder='password' type='password'/>
      <button onClick={signIn} type='submit'>Sign In </button>
    <h4> 
      <span className='signUpScreen-grey'>New to Netflix? </span>
      <span onClick={register}className='signUpScreen-link'>Sign Up now.</span>
    </h4>
      </form>
    </div>
  )
}

export default SignUpScreen