
import logo from './logo.svg';
import './App.css';
import Home2 from './pages/Home2';
import Home from './pages/Home';
import Create from './components/Create'
import Navbar from './components/Navbar';
import Details from './pages/Details';
import { Route, Routes } from 'react-router-dom'

import React, { useState } from 'react';
import Createbasket from './components/Createbasket';


function App() {
  const [basket, setBasket] = useState("");

  return (
    <div className="App">

      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/home2" element={<Home2 />} />

          <Route path="/" element={<Home basket={basket} setBasket={setBasket} />} />
          <Route path="/details" element={<Details basket={basket} setBasket={setBasket} />} />


          <Route path="/create" element={<Create />} />
          <Route path="/createbasket" element={<Createbasket />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
