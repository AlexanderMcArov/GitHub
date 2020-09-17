import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem.js'

function TodoList(props) {

    const [bool,setBool] = useState(true)
    const [bool2,setBool2] = useState(true)

    useEffect(()=>{
        console.log('TodoList.js:UseEffect:');
    })

    useEffect(()=>{
        console.log('Bool: UPdATE-EFFECT');
        return ()=>{
            console.log('UNMOPUNT');
        }
    },[bool,bool2])

    return (
        <div>
            <button onClick={()=>setBool(!bool)}>Click me</button>
            <button onClick={()=>setBool2(!bool2)}>Click me</button>
            <ul className="todo-list">
                {props.data.map(item=>(
                    <TodoItem 
                        key = {item.id + '-list-item'}
                        item = {item}
                        changeStatus = {props.changeStatus}
                        href = "google.com"
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
