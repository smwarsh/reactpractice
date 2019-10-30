import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends: friends
  };

  removeFriend = (id) => {
    this.setState({friends: this.state.friends.filter(friend => friend.id !== id)});
  }

  render() {
    return(
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map( friend =>
          <FriendCard
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            id={friend.id}
            remove={this.removeFriend}
          />
        )}
      </Wrapper>
    );
  }
}

export default App;