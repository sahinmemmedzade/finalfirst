import React from 'react';
import './App.css';
import SignupForm from './auth/signup';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // React Router ekleniyor
import Login from './auth/login';
import ResendPassword from './auth/ResendPassword';
import NewsTicker from './homepage/newsticker';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
<Route path='/newstricker' element={<NewsTicker/>}/>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/resendpassword" element={<ResendPassword />} /> {/* Bu kısmı güncelledik */}
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
