import React from 'react';
import '../Navbar/Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  
  return (
    <nav className="navbar">
      <h3>Logo</h3>
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
      </ul>
    </nav>
  )
}
export default Navbar;