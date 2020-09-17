import React, { useState } from 'react';
import Todo from './Todo/Todo'
import './App.css';

function App() {
  let todo_list = [
        {
            id: 1,
            title: 'Купить паращют',
            status: false
        },
        {
            id: 2,
            title: 'Купить кирпич',
            status: false
        },
        {
            id: 3,
            title: 'Купить веревку',
            status: false
        },
        {
            id: 4,
            title: 'Купить самокат',
            status: true
        },
        {
            id: 5,
            title: 'Купить самолёт',
            status: false
        }
    ] 

  return (
    <div className="App">   
        <div className="col main_page">            
<<<<<<< HEAD
          <h2>ToDoList</h2>   
          <Input/>       
          <TodoList list = {todo_list}/>
=======
          <h2>ToDoList</h2>
          <Todo/>  
>>>>>>> 05417dc94a3bd67c6086194f9b5635b75ad1ee68
        </div>
    </div>
  );
}

export default App;
