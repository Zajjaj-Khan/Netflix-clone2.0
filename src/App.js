import React,{useEffect} from 'react';

import './App.css';
import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom'
import HomeScreen from './components/pages/homeScreen/HomeScreen';
import LoginScreen from './components/pages/LoginScreen/LoginInScreen';
import { auth } from './Firebase';
import { logout,login, selectUser } from './features/userSlice';
import { useDispatch,useSelector } from 'react-redux';
import ProfileScreen from './components/pages/ProfileScreen';
function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
useEffect(()=>{
  const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
    if(userAuth){
     //login
     console.log(userAuth)
      dispatch(
        login({
          uid:userAuth.uid,
          email:userAuth.email
        })
      )
    }else{
     //logout
     dispatch(logout())
    }
    return unsubscribe;
  });
  //eslint-disable-next-line
},[dispatch])
  return (
    <div className='app'>
    <Router>
      {!user ? (<LoginScreen/> ):(
     <Routes>
      <Route path='/profile' element={<ProfileScreen/>}/>
      <Route path="/" element={<HomeScreen/>} />
      </Routes>
     )}
    </Router>
    </div>
  );
}

export default App;
