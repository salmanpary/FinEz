import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Create from './components/Create'
import Navbar from './components/Navbar';
import Details from './pages/Details';
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

import React, { useState } from 'react';
import Signin from './pages/Signin';

function App() {
  const [basket, setBasket] = useState('')

  return (
    <div className="App">

      <Navbar />
      <div className="pt-16">
        <Routes>

          <Route path="/" element={<Home basket={basket} setBasket={setBasket} />} />
          <Route path="/details" element={<Details basket={basket} setBasket={setBasket} />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/login' element={<Login />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>

    </div>
  )
}


export default App;
