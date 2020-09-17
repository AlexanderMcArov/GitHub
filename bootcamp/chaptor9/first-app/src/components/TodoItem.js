import React, { useEffect } from 'react'

export default function TodoItem(props){
    console.log('TodoItem:',props.href);
    console.log('TodoItem:',props.item);
    console.log('TodoItem:',props.key);
    useEffect(()=>{
        console.log('TodoItem.js: useEffect')
    })

    // render() {
        let classlist = ['todo-list_item']
        if(props.item.status) classlist.push('checked')
    return (
        <li 
            onClick = {()=> props.changeStatus(props.item.id)}
            className = {classlist.join(' ')}>   
            {props.item.title}
        </li>   
    )
}

function TodoList() {
    let props = {
        obj1 = {
            a: 1,
            b: 2,
            c: 'tri'
        },
        obj2 = {
            a: 1,
            b: 2,
            c: 'tri'
        },
        obj3 = {
            a: 1,
            b: 2,
            c: 'tri'
        }
    }
    TodoItem(props)
}

function TodoItem(props){
    console.log(props.obj1);
    console.log(props.obj2);
    console.log(props.obj3);
}