import React, {Component} from 'react';
import axios from 'axios';
import TodosItem from './TodosItem'
import CreatTodoInput from './CreateTodoInput'


export default class Todos extends Component{
    state ={
        todos: [],
    };

    componentDidMount(){
        axios.get('http://localhost:3000/todos.json')
            .then(result =>{
                this.setState({
                    todos: result.data,
                });
            })
    }

    render(){
        const {todos} = this.state;

        return(
            <div>
                <h1>Todo-List</h1>
                <CreatTodoInput />
                <div className="people-container">
                    {todos.map(todos =>{
                        return (
                             <TodosItem  todosList={todos}/>
                        )
                     })
                    }
                </div>
            </div>
        );
    }

}
