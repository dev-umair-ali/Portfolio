import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import "../Styles/Home.css"
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    // Scroll for pt-grid-1
    gsap.to('.pt-grid-1', {
      y: '-100%',
      ease: 'linear',
      repeat: -1,
      duration: 20, // Adjust the speed here
      delay: 0, // Adjust the delay here
    });

    // Scroll for pt-grid-2
    gsap.to('.pt-grid-2', {
      y: '-100%',
      ease: 'linear',
      repeat: -1,
      duration: 30, // Adjust the speed here
      delay: 0, // Adjust the delay here
    });

    // Scroll for pt-grid-3
    gsap.to('.pt-grid-3', {
      y: '-100%',
      ease: 'linear',
      repeat: -1,
      duration: 50, // Adjust the speed here
      delay: 0, // Adjust the delay here
    });

    // Scroll for pt-grid-4
    gsap.to('.pt-grid-4', {
      y: '-100%',
      ease: 'linear',
      repeat: -1,
      duration: 30, // Adjust the speed here
      delay: 0, // Adjust the delay here
    });
  }, [])
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="path-to-your-logo.png" alt="Logo" />  {/* Replace with your logo path */}
          </div>
          <nav className="navbar">
            <ul className="nav-list">
              <li>
                <Link exact to="/" className="nav-link" activeClassName="active-link">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/work" className="nav-link" activeClassName="active-link">
                  WORK
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link" activeClassName="active-link">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/enquire" className="nav-link" activeClassName="active-link">
                  ENQUIRE
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="home-page-main">

        <div className="pf-box1 pt-grid-1">
          <img src="https://images.unsplash.com/photo-1707336668429-da6dfd6d8e83?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.unsplash.com/photo-1707336668429-da6dfd6d8e83?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.unsplash.com/photo-1707336668429-da6dfd6d8e83?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.unsplash.com/photo-1707336668429-da6dfd6d8e83?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.unsplash.com/photo-1707095423201-26c952f16232?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.unsplash.com/photo-1707879488528-62b4573737a4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            draggable="false" />
        </div>

        <div className="pf-box2 pt-grid-2">
          <img src="https://images.unsplash.com/photo-1707995354979-59cf51bc619d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            draggable="false" />
          <img src="https://images.pexels.com/photos/8498872/pexels-photo-8498872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            draggable="false" />
          <img src="https://images.unsplash.com/photo-1707095423201-26c952f16232?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            draggable="false" />
          <img src="https://images.pexels.com/photos/8498872/pexels-photo-8498872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            draggable="false" />
          <img src="https://images.unsplash.com/photo-1707095423201-26c952f16232?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
        </div>
        {/* <span className="pt-middle-text">
          Pics
        </span> */}
        <div className="pf-box2 pt-grid-3">
          <img src="https://images.unsplash.com/photo-1707879488528-62b4573737a4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            draggable="false" />
          <img src="https://images.pexels.com/photos/8498872/pexels-photo-8498872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            draggable="false" />
          <img src="https://images.unsplash.com/photo-1707095423201-26c952f16232?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.unsplash.com/photo-1707879488528-62b4573737a4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            draggable="false" />
          <img src="https://images.unsplash.com/photo-1707336668429-da6dfd6d8e83?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
        </div>

        <div className="pf-box2  pt-grid-4">
          <img src="https://images.unsplash.com/photo-1707336668429-da6dfd6d8e83?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            draggable="false" />
          <img src="https://images.pexels.com/photos/8498872/pexels-photo-8498872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            draggable="false" />
          <img src="https://images.unsplash.com/photo-1707095423201-26c952f16232?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.unsplash.com/photo-1707336668429-da6dfd6d8e83?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            draggable="false" />
          <img src="https://images.pexels.com/photos/8498872/pexels-photo-8498872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            draggable="false" />

        </div>
        <div className="pf-box1 pt-grid-1">
          <img src="https://images.unsplash.com/photo-1707336668429-da6dfd6d8e83?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.unsplash.com/photo-1707336668429-da6dfd6d8e83?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.unsplash.com/photo-1707336668429-da6dfd6d8e83?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.unsplash.com/photo-1707336668429-da6dfd6d8e83?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.unsplash.com/photo-1707095423201-26c952f16232?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.unsplash.com/photo-1707879488528-62b4573737a4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            draggable="false" />
          <img src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            draggable="false" />
        </div>
      </div>
    </div>
  )
}

export default Home