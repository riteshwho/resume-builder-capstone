import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
          <header className="header">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/logo1_edfc81b31b.png" alt="almabetter" className="logo" />
            
            <nav className="navbar">
            
              <ul className="navbar-list">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>


              {/* <li><a className="navbar-link" href="#">Resume Template</a></li>
                <li><a className="navbar-link" href="#">My Resume</a></li>
                <li><a className="navbar-link" href="#">About Us</a></li> 
  */}
                
              </ul>
            </nav>
            
          </header>
    </div>
  )
}

export default Navbar;