import React from "react";

const Math = (props) => {
    const num1Int = Number(props.num1);
    const num2Int = Number(props.num2);
    let answer;
    
    switch (props.operator) {
        case '+':
            answer = num1Int + num2Int;
            break;
        case '-':
            answer = num1Int - num2Int;
            break;
        case '*':
            answer = num1Int * num2Int;
            break;
        case '/':
            answer = num1Int / num2Int;
            break;
    }

    const fontStyle = {fontSize: answer};
    return <span style={fontStyle}>{answer}</span>;
};

export default Math;