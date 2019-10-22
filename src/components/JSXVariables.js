import React from "react";

const name = 'Stephanie';
const thoughtsOnReact = 'is powerful!';

const numOfLetters = (word) => word.length;

const nameWithoutVowels = (word) => {
  const charArray = word.split('');
  for(let i = 0; i < charArray.length; i++) {
    let letter = charArray[i].toLowerCase();
    if(letter==='a' || letter==='e' || letter==='i' || letter==='o' || letter==='u') {
      let index = charArray.indexOf(letter);
      charArray.splice(index, 1);
      i--; // if there are 2 vowels in a row, the function skips the second one unless you do this
    }
  }
  return charArray.join('');
}

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {numOfLetters(name)} letters</h2>
        <h2>My name without any vowels is {nameWithoutVowels(name)}</h2>
        <h2>I think React {thoughtsOnReact}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
