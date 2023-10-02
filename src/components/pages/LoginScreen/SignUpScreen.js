import React,{useRef} from 'react'
import '../../../Css/signUpScreen.css'
import { auth } from '../../../Firebase';
import{createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const register = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword( auth,emailRef.current.value,passwordRef.current.value
      ).then((authUser) =>{
        console.log(authUser)
      })
      .catch((error)=>{
        alert(error.message)
      })
  }
  const signIn = (e) =>{
    e.preventDefault()
    signInWithEmailAndPassword( auth,emailRef.current.value,passwordRef.current.value
      ).then((authUser) =>{
        console.log(authUser)
      })
      .catch((error)=>{
        alert(error.message)
      })
  }
  return (
    <div className='signUp-Screen'>
      <h1>Sign In</h1>
      <form>
      <input ref={emailRef}placeholder='Email'type='email'/>
      <input ref={passwordRef}placeholder='password' type='password'/>
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
