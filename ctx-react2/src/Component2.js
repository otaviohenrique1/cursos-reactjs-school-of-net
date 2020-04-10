import React, { useContext } from 'react';
import { Context } from "./Context";

export default function Component2() {
    const obj = useContext(Context);

    return (
        <div>{ JSON.stringify(obj) }</div>
    );
}