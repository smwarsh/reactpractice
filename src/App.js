import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import FriendCard from "./components/FriendCard";

const printFriends = friends.map( i => <FriendCard name={i.name} image={i.image} occupation={i.occupation} location={i.location} /> );

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    {printFriends}
  </Wrapper>
);

export default App;
