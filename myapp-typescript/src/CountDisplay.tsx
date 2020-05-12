import React from "react";

interface Props {
    count: number
}

const CountDisplay: React.FC<Props> = (props) => {
    return (
        <div>
            <h1>Counter:</h1>
            <h2>{props.count}</h2>
        </div>
    );
};

export default CountDisplay;