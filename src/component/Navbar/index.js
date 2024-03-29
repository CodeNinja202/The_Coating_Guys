//Imports/////////////////////////////////////////////////////
import React from "react";
import "./index.css";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../Photos/NavbarLogo.png"
////////////////////////////////////////////////////////////////

//function for hamburger menu 
window.onload = function () { // loads when the menu is loaded
  const toggleButton = document.getElementsByClassName("toggle-button")[0]; // toggle button
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];// navbar links
  
  toggleButton.addEventListener("click", () => {//toggle button event handler
    toggleButton.classList.toggle("active");//toggle hamburger menu
    navbarLinks.classList.toggle("active");// active links to page sections
  });
};


//////////NAVIGATION MENU//////////
const Navbar = () => {
  return (
    //Main navigation container
    <div className="main-nav-container">
    <nav className="navbar">
      <div className="brand-title">
       <img style={{height:"550px", marginRight:"10px"}} src={Logo}/>
      </div>

      {/* Hamburger Menu */}
      <div className="links">
        <Link href="#" className="toggle-button">
          <span className="bar"></span>
           </Link>
      </div>

      {/* Nav Links Start */}
      <div className="navbar-links">
        <ul className="ul-list">

          {/* HOME LINKs */}
          <li>
            <div className="links">
              <Link to="#Home" smooth>
                Home
              </Link>
            </div>
          </li>

          {/* About Page */}
          <li>
            <div className="links">
              <Link to="#About" smooth>
                About
              </Link>
            </div>
          </li>

          {/* Philosophy Page */}
          <li>
            <div className="links">
              <Link to="#Our_Philosophy" smooth>
               Our Philosophy
              </Link>
            </div>
          </li>

          {/* Services Page */}
          <li>
            <div className="links">
              <Link to="#Services" smooth>
              Services
              </Link>
            </div>
          </li>

          {/* Why us page */}
          <li>
            <div className="links">
              <Link to="#Why_Us" smooth>
              Why Us
              </Link>
            </div>
          </li>

          {/* Image Gallery Page */}
          <li>
            <div className="links">
              <Link to="#Gallery" smooth>
              Gallery
              </Link>
            </div>
          </li>

          {/* Client Testimonials */}
          <li>
            <div className="links">
              <Link to="#Testimonials" smooth>
              Testimonials
              </Link>
            </div>
          </li>

          {/* Contact Page */}
          <li>
            <div className="links">
              <Link to="#Contact" smooth>
                Contact
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
