import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { Buttons } from '../Buttons/Buttons';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
          <ul>
            <li className='nav-item'>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/home'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/shop'>
                Shop
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/service'>
                Service
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/marken'>
                marken
              </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/blog'>
                  blog
                </Link>
              </li>
                <li className='nav-item'>
                  <Link
                    to='/kundenkonto'>
                    Kundenkonto
                  </Link>
                </li>
          </ul>
       </div>
     </nav>
    </>
        );
}
 export default Navbar;