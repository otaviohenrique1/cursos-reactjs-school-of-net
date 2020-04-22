import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";

const HELLO = gql`
  {
    msg
  }
`;

const FIND_PEOPLE = gql`
  {
    people {
      id,
      name
    }
  }
`;

const CREATE_PERSON = gql`
  mutation($person: people_input) {
    createPerson(person: $person) {
      id,
      name
    }
  }
`;

function App() {
  // const response = useQuery(HELLO);
  // const resFindAll = useQuery(FIND_PEOPLE);
  const { loading, data, error } = useQuery(FIND_PEOPLE, { suspend: false });
  const [createPerson, multiCreatePerson] = useMutation(CREATE_PERSON);
  const [person, setPerson] = useState({ name: '' });
  
  const onChange = (e) => {
    setPerson({ name: e.target.value });
  };
  
  const handleClick = async () => {
    const res = await createPerson({variables: { person: person } });
    console.log(res);
    console.log(multiCreatePerson.loading);
  };
  
  return (
    <div className="App">
      <input type="text" name="name" id="name" onChange={onChange} placeholder="Enter name"/>
      <button type="button" onClick={handleClick}>Save</button>
      <ul>
        { loading ?
          <div>Loading...</div> : error ?
          <div>Error!!!</div> :
          data && data.people && data.people.map(el => (
            <div>
              <li>{el._id}</li>
              <li>{el.name}</li>
            </div>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
