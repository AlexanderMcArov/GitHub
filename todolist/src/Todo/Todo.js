import React, { useState } from 'react'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'

import './Todo.css'

function Todo() {

    const [todo_list, setTodoList] = useState([
        {
            id:0,
            title: 'Купить самолёт',
            status: false
        },
        {
            id:1,
            title: 'Купить самокат',
            status: false
        },
        {
            id:2,
            title: 'Купить вертолет',
            status: false
        },
        {
            id:3,
            title: 'Купить избушку',
            status: true
        },
        {
            id:4,
            title: 'Купить абонемент',
            status: false
        }
    ])


    let todos = todo_list.map((item,index)=>{
        return (
            <TodoItem 
            key={item.id + '-li'}
            id={item.id} 
            title={item.title}
            status={item.status}
            index = {index}
            setTodoList = {setTodoList}
            todo_list = {todo_list}            
            />
        )
    })

    return (
        <div>
            <TodoInput
            setTodoList = {setTodoList}
            todo_list = {todo_list}
            />
            <ul className="todo_page">
                {todos}
            </ul>
        </div>
    )
}

export default Todo
