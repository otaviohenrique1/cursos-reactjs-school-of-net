import React, { useState, useEffect } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function App() {
  const [data, setData] = useState([]);
  // Exemplo de react com ajax utilizando o isomorphic-fetch e o es6-promise

  useEffect(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonResponse = await response.json();
    setData(jsonResponse);
    console.log(jsonResponse);
  }, []);
  
  return (
    <div id="fetch">
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
