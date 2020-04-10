import React, { createContext, useReducer } from 'react';
import useCombinedReducers from "use-combined-reducers";
import { initialState as todoInitial, todoReducer } from "./reducers/todoReducer";

export const DispatchContext = createContext(null);

export function ContextProvider(props) {
    const [state, dispatch] = useCombinedReducers({
        todoList: useReducer(todoInitial, todoReducer)
    });
    
    /*
        const [state, dispatch] = useCombinedReducers({
            todoList: useReducer(reducer, initialState),
            reducer2: useReducer(reducer, initialState)
        });
    */

    return(
        <DispatchContext.Provider value={{ state, dispatch }}>
            {props.children}
        </DispatchContext.Provider>
    );
}