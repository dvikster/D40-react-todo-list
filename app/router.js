import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

//Layout
import MainContainer from './components/MainContainer';

//Pages
import Home from './components/Home'
import Todos from './components/Todos'



export default (
    <Router history={browserHistory}>
        <Route component={MainContainer}>
            <Route path="/" component={Home} />

            <Route path="todo-list">
                    <IndexRoute component={Todos}/>
            </Route>
        </Route>
  </Router>
)
