import React, { Component } from 'react'

export default class TodoItem extends Component {

    render() {
        let classlist = ['todo-list_item']
        if(this.props.item.status) classlist.push('checked')
        console.log('TodoItem:',this.props);
        return (
            <li 
                onClick = {()=> this.props.changeStatus(this.props.item.id)}
                className = {classlist.join(' ')}>    
                {this.props.item.title}
            </li>   
        )
    }
}
