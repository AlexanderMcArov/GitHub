import React from 'react';
import Input from './Inputs/Input'
import TodoList from './Todo/TodoList'
import './App.css';

function App() {
  return (
    <div className="App">   
        <div className="col main_page">            
          <h2>ToDoList</h2>   
          <Input/>       
          <TodoList/>
        </div>
    </div>
  );
}

export default App;
