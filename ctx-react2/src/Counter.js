import React, { useContext } from 'react';
import { Context } from "./Context";

export default function Counter() {
    const {state, dispatch} = useContext(Context);

    return(
        <div>
            <h1>{ state.counter }</h1>
            <button type="button" onClick={() => dispatch({ type: 'ADD' })}>+</button>
            <button type="button" onClick={() => dispatch({ type: 'DESC' })}>-</button>
        </div>
    );
}