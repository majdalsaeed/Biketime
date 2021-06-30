import React, { useState, useEffect } from 'react';
import { Button } from '../Buttons/Buttons';
import '../Navbar/Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <nav className="navbar">

      <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
        Logo
        <i class='fab fa-typo3' />
      </NavLink>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className="nav-links">
        <NavLink className="navLink" exact={true} to="/" >
          <li>Home</li>
        </NavLink>
        <NavLink className="navLink" to="/shop" >
          <li>Shop</li>
        </NavLink>
        <NavLink className="navLink" to="/service" >
          <li>Service</li>
        </NavLink>
        <NavLink className="navLink" to="/marken">
          <li>Marken</li>
        </NavLink>
        <NavLink className="navLink" to="/blog">
          <li>Blog</li>
        </NavLink>
        <NavLink className="navLink" to="/kundenKonto">
          <li>KundenKonto</li>
        </NavLink>
        <NavLink className="navLink" to="/cart">
          <li>Cart</li>
        </NavLink>
      </ul>
    </nav>
  )
}
export default Navbar;