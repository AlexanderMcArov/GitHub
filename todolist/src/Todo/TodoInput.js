import React, { useState } from 'react'

function TodoInput(props) {

    let [title,setTitle] = useState('')

    function buttonAddItem(e){
        if(title < 1) return
        let res = [...props.todo_list]
        res.push({
            id: res.length,
            title: title,
            status: false
        })
        props.setTodoList(res)
        setTitle('')
    }

    function btnCancel(e){
        setTitle('')
    }

    function inputAddItem(e){
        setTitle(e.target.value)
    }

    return (
        <div className="todo_input-page">
            <input value={title} onChange={inputAddItem}/>    
            <button onClick={buttonAddItem}>Add</button>
            <button onClick={btnCancel}>Cancel</button>
        </div>
    )
}

export default TodoInput
