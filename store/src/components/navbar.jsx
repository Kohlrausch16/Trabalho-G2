import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo">
            <a href="/"><span>My</span>Store</a>
          </div>
          <ul className="navbar-links-left">
            <li><a href="/">Home</a></li>
            <li><a href="/">Produtos</a></li>
          </ul>
        </div>
        <ul className="navbar-links-right">
            <input class="input-search" ></input>
            <a href="/"><i class="fa-solid fa-magnifying-glass fa-lg"></i></a>
            <li><a href="/login">Login</a></li>
            <a href="/"><i class="fa-solid fa-cart-shopping fa-lg"></i></a>

        </ul>
      </nav>
      <hr className="navbar-divider" />
    </>
    );
  };
  
export default Navbar;
  
