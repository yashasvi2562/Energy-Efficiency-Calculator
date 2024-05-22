import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import icon from "../assets/icon.jpeg";
function Navbar() {
  return (
    <div>
      <header>
        <div class="main">
          <div className="head">
            <img src={icon} alt="" />
          </div>
          <div className="list">
            <ul>
              <li className="active">
                <Link to="/">
                  <i className="fa fa-home"></i>
                  Home
                </Link>
              </li>
              <li className="active">
                <Link to="/AboutUs">
                  {" "}
                  <i class="fa-solid fa-users"></i> About US
                </Link>
              </li>
              <li className="active">
                <Link to="/contact-us">
                  {" "}
                  <i class="fa-solid fa-phone"></i> Contact Us
                </Link>
              </li>
              <Link to="/Login">
                <button className="log"> Log-in</button>
              </Link>
            </ul>
          </div>
          <div class="burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
