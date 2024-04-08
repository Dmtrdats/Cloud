import React, {useEffect} from 'react';
import Navbar from './components/Navbar.jsx';
import { Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';

import './App.css';
import Registration from './components/Registration.jsx';
import Login from './components/Login.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './actions/user.js';
import Disk from './components/disk/Disk.jsx';

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  

  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar />
      <div className="wrap">
       {!isAuth ?
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes> 
        :
        <Routes>
        <Route exact path="/" element={<Disk />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
        }
        
      </div>
        
    </div>

    </BrowserRouter>
    
  );
}
 
export default App;