import React, { useState, useEffect } from 'react';
import axios from "axios";
import TodoForm from "./components/TodoForm";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await axios.get('http://localhost:9000/todos');
    setData(response.data);
    console.log(response.data);
  }, []);
  
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
            <TodoForm/>
          </Grid>
        </Grid>
        {/* <ul>
          {data.map((item, index) => (
            <div>
              <li key={index}>{item.title}</li>
              <li><Button variant="contained" color="primary">Click</Button></li>
            </div>
          ))}
        </ul> */}
        </Container>
    </div>
  );
}
