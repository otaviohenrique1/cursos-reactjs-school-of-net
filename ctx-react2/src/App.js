import React from 'react';
import { ContextProvider } from "./Context2";
import Counter from "./Counter";
import TodoApp from "./components/TodoApp";

export default function App() {
  return (
    <ContextProvider>
      <div className="App">
        <TodoApp/>
      </div>
    </ContextProvider>
  );
}