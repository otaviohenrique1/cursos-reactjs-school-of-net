import React from 'react';
import Header from "./../Header/Header";
import TodoForm from "./../TodoForm/TodoForm";
import TodoItem from "./../TodoItem/TodoItem";

export default ({ onAdd, onRemove, todos }) => {
    return (
        <div className="container">
            <Header/>
            {/* <h1>Aplicações React - Live CLass</h1> */}
            <div className="row mt-5">
                <TodoForm
                    onAdd={onAdd}
                />
            </div>
            <div className="row mt-5">
                <TodoItem
                    todos={todos}
                    onRemove={onRemove}
                />
            </div>
        </div>
    );
}