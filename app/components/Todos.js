import React, {Component} from 'react';
import TodosItem from './TodosItem'


export default class Todos extends Component{
    render(){

        const {data} = this.props;
        console.log(data);

        return(
            <div>
                <div className="people-container">

                    {
                        data.map(todo =>{
                            return (
                                <TodosItem  todosList={todo}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

}

