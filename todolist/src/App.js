import React from 'react';
import Input from './Inputs/Input'
import TodoList from './Todo/TodoList'
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
          <h2>ToDoList</h2>   
          <Input/>       
          <TodoList list = {todo_list}/>
        </div>
    </div>
  );
}

export default App;
