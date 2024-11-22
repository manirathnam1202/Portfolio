import React from "react"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Link } from 'react-scroll';

import './App.css'

function App() {
  return (
      <div className="App">  
        <BrowserRouter>
        <ul className="Navbar">
        <h3>Portfolio</h3>
           
          <li className="first"><Link to="h" smooth={true} duration={500} offset={-100}>Home</Link></li>
          <li><Link to="a" smooth={true} duration={500} offset={-100}>About</Link></li>
          <li><Link to="s" smooth={true} duration={500} offset={-100}>Skills</Link></li>
          <li><Link to="p" smooth={true} duration={500} offset={-10}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} offset={-10}>Contact</Link></li>
        </ul>
        <Routes>
          {/* <Route path="/"element ={<Home />} />
          <Route path="/about"element={<About />} /> 
          <Route path="/skills"eleme
          nt={<Skills />} /> */}
          
        </Routes>
        
        </BrowserRouter>
        </div>
      
    
  )
}

export default App
