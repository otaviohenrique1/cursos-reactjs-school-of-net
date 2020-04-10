import React, { useContext, useEffect, useState } from 'react';
import { DispatchContext } from "./../Context2";
import TodoList from "./TodoList";
import id from "uuid/v4";

export default function TodoApp() {
    const {state, dispatch} = useContext(DispatchContext);

    const [title, setTitle] = useState('');

    useEffect(() => {
        console.log(state, dispatch);
    }, []);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const onClick = () => {
        dispatch({ type: 'ADD_TODO', title, id: id() });
        setTitle('');
    };

    return(
        <div>
            <input type="text" value={title} name="title" onChange={handleChange}/>
            <button type="button" onClick={onClick}>Add</button>
            <TodoList todoList={state.todoList}/>
        </div>
    );
}