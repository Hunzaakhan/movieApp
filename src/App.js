// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

import SingleMovie from './pages/SingleMovie';

function App() {
  return (

    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movie/:id" element={<SingleMovie />} />  
      
    </Routes>








  );
}

export default App;



