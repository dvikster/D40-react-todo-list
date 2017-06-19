import React, {Component} from 'react';
import {Button} from 'react-materialize';

export default class TodosItem extends Component{
    state ={
        visible: false
    };


    clickCloseButton = (e)=> {
        e.preventDefault();
        this.setState({visible:true});
    }

    render(){
        let todo = this.props.todosList;

        let visible = this.state.visible;
            return (
                <div className={"item "+(visible ? 'none': '')} key={todo.id}>
                     <div>{todo.user}</div>
                    <Button onClick={this.clickCloseButton} waves='light'>Delete</Button>
                </div>
            )
    }

}

