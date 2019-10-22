import React from "react";

const name = 'Steph';
const thoughtsOnReact = 'is powerful!';

const numOfLetters = (word) => word.length;

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {numOfLetters(name)} letters</h2>
        <h2>I think React {thoughtsOnReact}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
