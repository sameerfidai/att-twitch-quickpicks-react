import React from "react";
import "./LeftSideBar.css";

function LeftSideBar() {
  return (
    <div className="left-sidebar-container">
      <h3 className="rec-text">Recommended</h3>

      <div className="streamer-div">
        <img
          className="streamer-img"
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/fef9fc35-20a0-4884-8ee1-10ab74c22687-profile_image-70x70.png"
        />
        <h3 className="streamer-name">Ninja</h3>
        <img
          className="live-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Red_Circle%28small%29.svg/2048px-Red_Circle%28small%29.svg.png"
        />
        <h3 className="viewcount">15K</h3>
      </div>

      <div className="streamer-div">
        <img
          className="streamer-img"
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/82b63a01-628f-4c81-9b05-dd3a5011fdda-profile_image-70x70.png"
        />
        <h3 className="streamer-name">Tfue</h3>
        <img
          className="live-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Red_Circle%28small%29.svg/2048px-Red_Circle%28small%29.svg.png"
        />
        <h3 className="viewcount">12K</h3>
      </div>

      <div className="streamer-div">
        <img
          className="streamer-img"
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/75260307-584a-4eb7-99ba-d2708d27795e-profile_image-70x70.png"
        />
        <h3 className="streamer-name">SyperPK</h3>
        <img
          className="live-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Red_Circle%28small%29.svg/2048px-Red_Circle%28small%29.svg.png"
        />
        <h3 className="viewcount">12K</h3>
      </div>
    </div>
  );
}

export default LeftSideBar;
