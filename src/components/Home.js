import React from "react";
import { ReactDOM } from "react";


const Home = () =>{
      return (
        <div>
          <header className="header">
            <img src="alma.png" alt="almabetter" className="logo" />
            <nav className="navbar">
              <ul className="navbar-list">
                <li><a className="navbar-link" href="#">Resume Template</a></li>
                <li><a className="navbar-link" href="#">My Resume</a></li>
                <li><a className="navbar-link" href="#">About Us</a></li>
              </ul>
            </nav>
          </header>
          {/*
            *******************************************************
                             template start
               *******************************************
          */}
          <div className="template">
            <h2>Templates</h2>
            <h6>Select A Template to get Started</h6>
          </div>
          <main>
            <div className="grid-container">
              <div className="grid-item grid-item-1"><img src="images/resume2.jpg" alt="resume" /></div>
              <div className="grid-item grid-item-2"><img src="images/resume.jpg" alt="resume" /></div>
              <div className="grid-item grid-item-3"><img src="images/resume3.jpg" alt="resume" /></div>
              <div className="grid-item grid-item-4"><img src="images/resume4.jpg" alt="resume" /></div>
            </div>
          </main>
        </div>)
      ;
    };

    export default Home;