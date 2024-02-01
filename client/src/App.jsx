import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Registration from './components/Registration.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar />
      <div className="wrap">
        <Routes>
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
        
    </div>
    </BrowserRouter>
    
  );
}

export default App;