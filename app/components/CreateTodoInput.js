import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import Todos from './Todos'


let todoList = [];

export default class CreatTodoInput extends Component{
    static propTypes = {
        text: PropTypes.string,
    }
    constructor(props){
        super(props);
        this.state = ({
            text: this.props.text || '',
            list: []
        });
    };

    todoSubmit = e => {
        if (e.which === 13) {
            this.setState({ text: e.target.value })
            todoList.push(e.target.value);
            this.setState({text:''});
        }
    }

    taskCheckboxChange = e => {
        this.setState({ text: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Todo-List</h1>
                <input
                       type="text"
                       value={this.state.text}
                       onChange={this.taskCheckboxChange}
                       onKeyDown={this.todoSubmit}
                />
                <Todos data={todoList} />
            </div>
        )
    }
}