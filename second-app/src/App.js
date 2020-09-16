import React, {useState} from 'react';
import InputList from './components/Inputs/InputList'
import './App.css'

function App() {

  let arr_names = [
    {
      name: "Sanya",
      surname: 'Week',
      age: 24
    },
    {
      name: "Petya",
      surname: 'Week',
      age: 22
    },
    {
      name: "Galla",
      surname: 'Week',
      age: 21
    }
  ]

  return (
    <div className="App">
       <InputList />
    </div>
  );
}

export default App;
