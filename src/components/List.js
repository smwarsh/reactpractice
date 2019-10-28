import React from "react";

const List = props => (
  <ul className="list-group">
    {/* From React docs: A good rule of thumb is that elements inside the map() call need keys. */}
    {props.groceries.map(item => <li key={item.id}>{item.name}</li>)}
  </ul>
);

export default List;
