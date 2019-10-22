import React from "react";

const name = 'Stephanie';
const thoughtsOnReact = 'is powerful!';

const stripVowels = word => {
  const vowels = ['a','e','i','o','u'];
  let result = '';

  for(let i = 0; i < word.length; i++) {
    if(!(vowels.includes(word[i].toLowerCase()))) {
      result += word[i];
    }
  }
  return result;
}

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {name.length} letters</h2>
        <h2>My name without any vowels is {stripVowels(name)}</h2>
        <h2>I think React {thoughtsOnReact}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
