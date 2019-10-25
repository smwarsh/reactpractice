import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import FriendCard from "./components/FriendCard";

function printFriends(friendsArray) {
  let printOut = [];
  for (let i = 0; i < friendsArray.length; i++) {
    printOut.push(<FriendCard name={friends[i].name} image={friends[i].image} occupation={friends[i].occupation} location={friends[i].location} />);
  }
  return printOut;
}

const printMyFriends = friends.map( i => <FriendCard name={i.name} image={i.image} occupation={i.occupation} location={i.location} /> );

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    {printFriends(friends)}
    {printMyFriends}
    {friends.map( i => <FriendCard name={i.name} image={i.image} occupation={i.occupation} location={i.location} /> )}
  </Wrapper>
);

export default App;
