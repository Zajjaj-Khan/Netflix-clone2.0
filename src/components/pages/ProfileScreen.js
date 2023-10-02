import React from 'react'
import '../../Css/profileScreen.css'
import NavBar from '../layout/NavBar'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../Firebase'

const ProfileScreen = () => {
    const user = useSelector(selectUser)
  return (
    <div className='profileScreen'>
        <NavBar/>
        <div className='profileScreen-body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen-info'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar'/>
                <div className='profileScreen-details'>
                 <h2>{user.email}</h2>
                <div className='profileScreen-plan'>
                    <h3>Plans</h3>
                    <button 
                    onClick={()=>auth.signOut()}className='profileScreen-signout'>Sign Out</button>
                </div>
            </div>
            </div>
            </div>
        </div>



  )
}

export default ProfileScreen