import React, { useState, useEffect } from 'react';
import TodoForm from "../components/TodoForm";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TodoList from "../components/TodoList";
import { getTodos, postTodos, removeTodos } from "../resources/todo";

export default function TodoContainer() {
  const [todos, setTodos] = useState([]);

  const fetchData = async() => {
    const { data } = await getTodos();
    setTodos(data);
  }

  useEffect(() => {
    fetchData()
  }, []);

  const handleSubmit = async(title) => {
    const { data } = await postTodos(title);
    if (data) {
      return fetchData();
    }
  }

  const handleRemove = async(id) => {
    const { data } = await removeTodos(id);
    return fetchData();
    // if (data) {
    //   return fetchData();
    // }
  }
  
  return (
    <div id="fetch">
      <Container maxWidth="sm">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" component="h1">
              Todo App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TodoForm handleSubmit={handleSubmit}/>
          </Grid>
          <Grid item xs={12}>
            <TodoList todos={todos} handleRemove={handleRemove}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
