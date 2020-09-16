import React, { useState } from 'react'
import './Todo.css'

function TodoList() {
    
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

    let [TodoList, setToDolist] = useState(todo_list)    
    let result = TodoList.map((item,index) => {
        let cl = ['todoitem']
        if(item.status == true) cl.push('checked')
        return (
        <li className={cl.join(' ')} key={item.id + '-li-' + index}>
            {item.title}
            {!item.status ? 
            <div className="btns">
                <button className="btn ok" item-id={item.id} onClick={onClick}>OK</button>
                <button className="btn edit" item-id={item.id} onClick={onClick}>EDIT</button>
                <button className="btn delete" item-id={item.id} onClick={onClick}>DELETE</button>
            </div> : ''}
        </li>
        )
    })

    function onClick(e){
        let move = e.target.className
        let id = e.target.getAttribute('item-id')
        move = move.split(' ')
        if(move.includes('ok')) acceptItem(id)
        console.log(move,id);
        // else if(move.includes('edit')) editItem(id)
        // else if(move.includes('delete')) deleteItem(id)
    }

    function acceptItem(id){
        console.log('AcceptItem:',id);
       let ind = todo_list.map((item,index)=>{
           if(item.id == id){
               let reslist = [...TodoList]
               reslist[index].status = !item.status            
               setToDolist(reslist)
           }
       })
    }   

    return (
            <ul className="todolist">
                {result}
            </ul>
    )
}

export default TodoList
