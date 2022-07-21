import React from "react";
import "./MiddleSection.css";
import gameplay from "../images/gameplay.png";

function MiddleSection() {
  return (
    <div className="middle-section-container">
      <div className="gameplay-div">
        <img className="gameplay-img" src={gameplay} alt="Gameplay" />
      </div>

      <div className="streamer-bar">
        <div className="streamer-img-div">
          <img
            className="streamer-stream-img"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/82b63a01-628f-4c81-9b05-dd3a5011fdda-profile_image-70x70.png"
          />
        </div>
        <div className="stream-info-div">
          <p className="streamer-stream-name">Tfue</p>
          <p className="streamer-stream-desc">Zero Build High Kills</p>
          <p className="streamer-stream-game">Fortnite</p>
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;
