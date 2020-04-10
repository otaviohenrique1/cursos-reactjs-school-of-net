import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  // Exemplo de react com ajax utilizando o axios

  useEffect(async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setData(response.data);
    console.log(response.data);
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
