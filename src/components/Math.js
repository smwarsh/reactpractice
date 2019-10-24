import React from "react";

const Math = (props) => {
    const num1Int = Number(props.num1);
    const num2Int = Number(props.num2);
    switch (props.operator) {
        case '+':
            return <span>{num1Int + num2Int}</span>;
            break;
        case '-':
            return <span>{num1Int - num2Int}</span>;
            break;
        case '*':
            return <span>{num1Int * num2Int}</span>;
            break;
        case '/':
            return <span>{num1Int / num2Int}</span>;
            break;
    }
};

export default Math;