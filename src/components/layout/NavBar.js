import React,{useState,useEffect} from 'react'
import {useNavigate} from'react-router-dom'
import '../../Css/Navbar.css'
function NavBar() {
    const [show,setShow] = useState(false);
    const navigate = useNavigate()
    const transitionNavBar =() =>{
        if(window.scrollY>100){
            setShow(true);
        }else{
            setShow(false)
        }
    };
    useEffect(()=>{
        window.addEventListener('scroll',transitionNavBar)
        return ()=> window.removeEventListener('scroll',transitionNavBar)

    },[])
  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <div className='nav-contents '>
        <img 
        onClick={()=> navigate('/')}
         className='nav-logo'src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='Netflix-logo'/>
        <img 
        onClick={()=> navigate('/profile')}
        className='nav-avatar'src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'alt='avatar'/>
        </div>
       
    </div>
  )
}

export default NavBar