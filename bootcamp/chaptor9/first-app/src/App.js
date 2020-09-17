import React, {useState, useEffect} from 'react';
import Todo from './components/Todo'

function App() {

  useEffect(()=>{
    console.log('App.js:UseEffect:');
  })

  return (
    <div className="App">
      <Todo text = "Hello ToDo" world = "World"/>
      <img src="."></img>
    </div>
  );
}

export default App;
