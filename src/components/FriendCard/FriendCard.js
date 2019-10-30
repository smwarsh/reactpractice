import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Address:</strong> {props.location}
        </li>
      </ul>
    </div>
    <span className="remove" onClick={(e) => props.remove(props.id, e)}>𝘅</span>
    {/* option 2 for passing an argument to event handler: */}
    {/* <span className="remove" onClick={props.remove.bind(this, props.id)}>𝘅</span> */}
  </div>
);

export default FriendCard;
