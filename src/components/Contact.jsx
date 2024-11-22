import React from 'react'
import './Contact.css';
import phone from './phone.png';
import mail from './mail.png';
import linked from './linked.png';
import insta from './insta.png';
function Contact() {
  return (
    <div className="contact">
        {/* <form className="contactform">
           <label htmlFor="name">Name : </label>
           <input type="text"className="text" placeholder="Your name " />
           <br /><br />
           <label htmlFor='mail'>Email : </label>
           <input type="email" className="text"placeholder="Your mail" />
           <br /><br />
           <label htmlFor="message"id="meslab">Message : </label>
           <textarea name="message" id="mes"placeholder='Your message..'></textarea><br />
           <button className="formbtn">Submit</button>
        </form> */}
        <h1>Contact Info</h1>
        <h3>Manirathnam N</h3>
        <ul className="logos">
            
            <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCCSfxNnrnbnCQJnwdfcNVGkjzBfTZMPCSPjPHPVRWJWWtTFtgXcvqKQvZpMZlCSrzRTgB" target="_blank"><img src={mail} className="mail"alt="" /></a></li>
            <li><a href="https://www.linkedin.com/in/manirathnam-n-0b476b238/" target="_blank"><img src={linked} className="linked"alt="" /></a></li>
            <li><a href="https://www.instagram.com/_manirathnam_23/" target="_blank"><img src={insta} className="insta"alt="" /></a></li>
            
        </ul>
    </div>
  )
}

export default Contact