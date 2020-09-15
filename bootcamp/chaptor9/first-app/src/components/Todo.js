import React from 'react'
import TodoList from './TodoList'

class Todo extends React.Component{

    state = {
        poolly: true,
        props: this.props,
        todos:[
            {
                id:0,
                title: 'Python',
                status: true
            },
            {
                id:1,
                title: 'React',
                status: false
            },
            {
                id:2,
                title: 'Javascript',
                status: true
            }
        ]
    }

    handleChangeStat = (id) =>{
        console.log(id);
        let index = this.state.todos.findIndex((item) => {
            return item.id === id
        })
        let todos = [...this.state.todos]
        todos[index].status = !todos[index].status
        this.setState({
            todos
        })
    }   


    render(){
        console.log(this.state.props);
        return(
            <>
                <div className="todo">
                    <TodoList 
                    data = {this.state.todos}
                    changeStatus = {this.handleChangeStat}
                    />
                </div>
            </>
        )
    }
}

export default Todo;