import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, NavLink } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Store from './components/Store';

function App() {
  return (
    <div className="App">

      <h1>Welcome</h1>
      <Router>
        <NavLink to="/about" >    About</NavLink>
        <NavLink to="/home" >Home</NavLink>
        <NavLink to="/store/111">Store 111</NavLink>
        <NavLink to="/store/222">Store 222</NavLink>
        <NavLink to="/store/333">Store 333</NavLink>

        <a href="/home" >Home</a>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store/:id" element={<Store />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
