import React from 'react'
import './Home.css';
import mypic from './mypic.jpeg';
function Home() {
  return (
    <section className="h">
      <p>Welcome to my portfolio</p>
        <h1>I'm Manirathnam N.</h1>
        <p className="frt">Frontend developer</p>
        <p>Excited to leverage my skills in a collaborative environment and contribute to impactful projects.</p>
        <button>GET IN TOUCH</button>
        <img src={mypic} alt="mypic" />

        
    </section>
  )
}

export default Home