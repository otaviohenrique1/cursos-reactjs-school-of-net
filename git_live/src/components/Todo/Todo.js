import React, { Component } from 'react';
import TodoView from "./TodoView";
import Seed from "./../../utils/Seed";

export default class Todo extends Component {
    state = {
        todos: []
    };

    componentDidMount() {
        this.setState({ todos:Seed });
    }
    
    onAdd = (todo) => {
        const { todos } = this.state;
        this.setState({ todos: [todo, ...todos] }); // [todo, ...todos] -> unshift
        // this.setState({ todos: [...todos, todo] }); // [...todos, todo] -> push
        // Com o push:
        // todos.push(todos);
        // this.setState({ todos });
    }

    onRemove = (index) => {
        const { todos } = this.state;
        this.setState({ todos: todos.filter((element, i) => i !== index) });
    }

    render() {
        const { todos } = this.state;
        return (
            <TodoView
                onAdd={this.onAdd}
                onRemove={this.onRemove}
                todos={todos}
            />
        );
    }
}