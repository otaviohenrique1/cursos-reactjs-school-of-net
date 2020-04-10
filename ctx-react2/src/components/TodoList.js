import React from 'react';

export default function TodoList(props) {
    console.log(props);
    return (
        <div>
            <ul>
                { props.todoList.map((todo, index) => (
                    <li>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}