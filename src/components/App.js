import React, { useState } from "react";
import "./App.css";
import TopNavigation from "./topnav.js";
import Footer from "./Footer";

function App() {
  const [contact, setContact] = useState({
    email: "",
    pass: ""
  });

  function handler(event) {
    const { value, name } = event.target;

    setContact((preValue) => {
      if (name === "email") {
        return {
          email: value,
          pass: preValue.pass
        };
      } else if (name === "pass") {
        return {
          email: preValue.email,
          pass: value
        };
      }
    });
  }

  return (
    <>
      <div>
        <TopNavigation />
      </div>
      <div className="container">
        <h1>Log-In to Zenexia</h1>
        <br></br>
        <br></br>
        <form action="https://zenexia-codepad.netlify.app/">
          <input
            onChange={handler}
            value={contact.email}
            name="email"
            placeholder="Email"
          />
          <br></br>
          <input
            onChange={handler}
            value={contact.fName}
            name="pass"
            placeholder="Password"
            type="password"
          />
          <br></br>
          <br></br>
          <button type="submit">Log-In</button>
          
        </form>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
