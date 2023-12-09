import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  const styl={
    color:'#021c27',
  }
  return (
    <div className='nav' style={styl}>
      <Link to="/">Home  </Link>
        <Link to="/about">  About  </Link>
        <Link to="/contact">  Contact  </Link>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
    </div>
  );
}

export default App;
