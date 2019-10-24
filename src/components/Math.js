import React from "react";

const Math = (props) => {
    let answer;

    switch (props.operator) {
        case '+':
            answer = props.num1 + props.num2;
            break;
        case '-':
            answer = props.num1 - props.num2;
            break;
        case '*':
            answer = props.num1 * props.num2;
            break;
        case '/':
            answer = props.num1 / props.num2;
            break;
    }

    return <span style={{ fontSize: answer }}>{answer}</span>;
};

export default Math;