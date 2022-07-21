import React from "react";
import LeftSideBar from "./LeftSideBar";
import "./LeftSideBar.css";
import "./MainScreen.css";
import MiddleSection from "./MiddleSection";
import RightSideBar from "./RightSideBar";

function MainScreen() {
  return (
    <div className="main-screen">
      <LeftSideBar />
      <MiddleSection />
      <RightSideBar />
    </div>
  );
}

export default MainScreen;
