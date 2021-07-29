import React from "react";
import "./App.css";
import logo from "./images/logo.png";

export default function TopNavigation() {
  return (
    <div>
      <div className="mainheader">
        <div className="right">
          <a href="https://zenexia-codepad.netlify.app/">
            <img className="logo" src={logo} alt="aa" />
          </a>
          <div className="text">
            <h2>Zenexia{"\u00A0"}</h2>
            <br></br>
            <h3>Codepad </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
