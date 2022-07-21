import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="left-div">
        <div className="twitch-logo-div">
          <img
            className="twitch-logo"
            src="https://pnggrid.com/wp-content/uploads/2021/05/Twitch-Logo-Transparent-Image-979x1024.png"
            alt="Twitch Logo"
          />
        </div>
        <div className="browse-div">
          <h3 className="browse-text">Browse</h3>
        </div>
      </div>

      <div className="middle-div">
        <div className="search-bar-div">
          <input className="search-bar" placeholder="Search" />
        </div>
      </div>

      <div className="right-div">
        <div className="login-div">
          <button className="login-btn">Login</button>
        </div>
        <div className="signup-div">
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
