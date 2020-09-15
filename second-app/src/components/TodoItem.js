import React from 'react'

function TodoItem(props) {
    console.log(props);
    return (
        <li>
          {props.title}  
        </li>
    )
}

export default TodoItem
