import React, { createContext, useReducer } from 'react';

const initialState = {
    counter: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                counter: state.counter + 1
            };
        
        case 'DESC':
            return {
                ...state,
                counter: state.counter -1
            };
        
        default:
            return state;
    }
};

export const Context = createContext({});

export function ContextProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return(
        <Context.Provider value={{ state, dispatch }}>
            {props.children}
        </Context.Provider>
    );
}