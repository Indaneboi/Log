import React from "react";
import "./App.css";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        Made with <FontAwesomeIcon color="#ADAFBC" icon={faHeart} /> by Anirudh Yadav
      </p>
    </div>
  );
}
