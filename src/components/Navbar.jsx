import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <h1>Hola soy una navbar</h1>
      <div className="navbar-buttons-container">
        <Link to="/login" className="login">Log in</Link>
        <Link to="/signup" className="login">Sign Up</Link>
        <Link to="/" className="login">Main Menu</Link>
      </div>
    </div>
  );
}
