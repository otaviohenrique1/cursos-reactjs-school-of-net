import React, { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState([]);
  // Exemplo de react com ajax utilizando o fetch
  
  useEffect(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    
  });
  
  return (
    <div id="fetch">
      
    </div>
  );
}
