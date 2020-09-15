import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
    return (
        <div>
            <ul className="todo-list">
                {props.data.map(item=>(
                    <TodoItem 
                        key = {item.id + '-list-item'}
                        item = {item}
                        changeStatus = {props.changeStatus}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
