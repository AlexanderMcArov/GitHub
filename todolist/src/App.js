import React, { useState } from 'react';
import Todo from './Todo/Todo'
import './App.css';

function App() {
  return (
    <div className="App">   
        <div className="col main_page">            
          <h2>ToDoList</h2>
          <Todo/>  
        </div>
    </div>
  );
}

export default App;
