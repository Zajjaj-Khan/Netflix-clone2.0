import React,{useState} from 'react';
import './App.css';

import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom'
import HomeScreen from './components/pages/homeScreen/HomeScreen';
import LoginScreen from './components/pages/LoginScreen/LoginInScreen';
function App() {
  const [user,setUser] = useState(null)
  return (
    <div className='app'>
    <Router>
      {!user ? (<LoginScreen/> ):(
     <Routes>
      <Route path="/home" element={<HomeScreen/>} />
      </Routes>
     )}
    </Router>
    </div>
  );
}

export default App;
