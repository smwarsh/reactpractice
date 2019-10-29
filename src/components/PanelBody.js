import React from "react";

const PanelBody = props => (
    <div className="panel-body text-center">
        <p>Click Count: {props.count}</p>
        <button className="btn btn-primary" onClick={props.increment}>
            Increment
        </button>
        {" "}
        <button className="btn btn-primary" onClick={props.decrement}>
            Decrement
        </button>
    </div>
);

export default PanelBody;