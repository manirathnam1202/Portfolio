import React from 'react'
import './Projects.css';
import cart from './cart.png';
function Projects() {
  return (
    <>
    <h1 className="pro">Projects</h1>
    <div className="p">
        <div className="todo">
            <h1>TodoList</h1>
            <img className="one"src={cart} alt="" />
            <p>I built a Todo List app using React that allows users to add, edit, and delete tasks. The app leverages React's useState for managing tasks and useEffect to persist data using local storage, ensuring tasks remain after a page refresh. Users can mark tasks as completed, and the interface dynamically updates as tasks are added or removed. This project helped me practice state management, component structure, and local storage integration in React.</p>
            {/* <h3>Technologies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
            </ul> */}
        </div>

        <div className="todo">
            <h1>Shopping Cart</h1>
            <img className="one"src={cart} alt="" />
            <p>I have developed a shopping cart app using React, showcasing my skills in state management, component structure, and dynamic UI rendering. The app allows users to add and remove items from the cart seamlessly. I integrated efficient data flow using React hooks such as useState and useEffect. This project demonstrates my ability to build interactive, responsive interfaces. The shopping cart app was designed with a focus on user experience and functionality.</p>
           
            {/* <h3>Technologies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
            </ul> */}
        </div>
    </div>
    </>
  )
}

export default Projects