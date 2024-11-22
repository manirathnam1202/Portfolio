import React from 'react'
import './Skills.css';
import html from './html.jpeg';
import css from './css.jpeg';
import js from './js.jpeg';
import re from './re.jpeg';
function Skills() {
  return (
    <section className="s">
      <h1>Skills</h1>
          <ul className="skilllist">
            <li className="ht"><img src={html} alt="html" /></li>
            <li><img src={css} alt="css" /></li>
            <li><img src={js} alt="js" /></li>
            <li><img src={re}alt="react" /></li>
          </ul>
    </section>
  )
}

export default Skills