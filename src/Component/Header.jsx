import React, { useState } from "react";
import logo from "/home/naveen/ecommerce/src/Image/logo.png";
// import logo from "/home/naveen/ecommerce/src/Image/3.png";
import { NavLink } from "react-router-dom";


const Header = () => {
  const [hamburgerOpen, setHamburgerOpen]=useState(false);

  const toggleHamburger = () => {
    alert("clicked")
    setHamburgerOpen(!hamburgerOpen)
    
  }
  return (
    <>
      <section className="header">
        {/* <a href="#">
          <img src={logo} className="logo" alt="logoimage" />
        </a> */}
        <p className="logo1">Patnafashion Trend</p>
        
        <div>
          <ul className="navbar">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="lg-bag">
              <NavLink to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </NavLink>
            </li>
            {/* <a href="#" className="close">
              
            </a> */}
            <NavLink to={"#"}><i className="fa-solclassName fa-xmark close"></i></NavLink>
          </ul>
        </div>
        <div className="mobile">
          {/* <a href="cart.html">
          </a> */}
          <NavLink to={"cart"}><i className="fa-solid fa-cart-shopping"></i></NavLink>

          <NavLink to={"#"}><i className="fas fa-outdent bar" onClick={toggleHamburger}></i></NavLink>
       
        </div>
      </section>
    </>
  );
};
export default Header;
