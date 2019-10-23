import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const Header = () => (
  <header className="header" style={{'background': 'red'}}>
    <h1 style={{'font-size': 100}}>Welcome</h1>
  </header>
);

export default Header;
