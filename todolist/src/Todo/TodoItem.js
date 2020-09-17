import React, { useState } from 'react'

function TodoItem(props) {
    console.log(props);

    let [isEdit, setEdit] = useState(false)
    let [title, setTitle] = useState('')
    
    function btnAccept(){
        let res = [...props.todo_list]
        console.log(res);
        res[props.index].status = true
        console.log(res);
        props.setTodoList(res)
    }

    function btnEdit(){
        setEdit(!isEdit)
    }

    return (
        <li id={props.id} className={props.status?'cheked':''}>
            {props.status ? '' : (
                <>
                    {isEdit ? (
                        <>
                            <input value={title}></input>
                        </>
                    ) : title}
                    <button onClick={btnAccept} className="btn ok">OK</button>
                    <button onClick={btnEdit} className="btn edit">EDIT</button>
                    <button onClick={btnAccept} className="btn delete">DELETE</button>
                </>
            )}
        </li>
    )
}

export default TodoItem
