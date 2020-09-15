import React from 'react'
import TodoItem from './TodoItem'

function TodoList() {
    let state = {
        todos:[
            {
                id: 0,
                title: 'Javascript',
                status: true
            },
            {
                id: 1,
                title: 'Python',
                status: true
            },
            {
                id: 2,
                title: 'Html',
                status: true
            },
            {
                id: 3,
                title: 'Javscript',
                status: true
            }
        ]
    }

    return (
        <ul>
            {
                state.todos.map(item =>{
                <li>{item.title}</li>
                })
            }
        </ul>
    )
}

export default TodoList
