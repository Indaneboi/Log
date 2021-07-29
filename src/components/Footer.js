import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        Made with <FontAwesomeIcon color="#b7bbc8" icon={faReact} /> by Anirudh Yadav
      </p>
    </div>
  );
}
