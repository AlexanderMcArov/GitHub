import React from 'react';
import TodoList from './TodoList';
import { render } from '@testing-library/react';

class Todo extends React.Component{
    
    constructor(props){
        super(props);
        console.log("CONSTRUCTOR");
    }
    
    state = {
        todos: [
            {
                id: 0,
                title: "qwerty",
                status: false
            },
            {
                id: 1,
                title: "Javascript",
                status: false
            },
            {
                id: 2,
                title: "React",
                status: false
            }
        ],
        bool: true
    }

    handleChangeStatus = (id) => {
        // console.log(id);
        const index = this.state.todos.findIndex((item)=>{
            return item.id === id
        })
        const todos = [...this.state.todos];
        todos[index].status = !todos[index].status;
        this.setState({todos})
    }
    
    // shouldComponentUpdate(nextProps,nextState){
    //     // console.log('SHOULD',nextProps,nextState);
    //     // console.log('STATE',this.state.todos[1]);
    //     for(let i of nextState.todos){
    //         for(let a of this.state.todos){
    //             if(i.status === a.status){
    //                 // console.log(i,a);
    //                 return false
    //             }else{
    //                 return true 
    //             }
    //         }
    //     }
               
    // }

    componentDidMount(){
        console.log('Mount');
    }

    componentDidUpdate(prevProps,prevState){
        console.log('Todo.js:useEffect:',prevProps,prevState.todos[0].status,this.state.todos[0].status);
        console.log(prevState.todos[0].title);
    } 

    render(){
        return (
            console.log("RENDER"),
            <div className='todo'>
                <TodoList data = {this.state.todos} changeStatus = {this.handleChangeStatus} ooo = {44}/>
            </div>
        )
    }
}

export default Todo