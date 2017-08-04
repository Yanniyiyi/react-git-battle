import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {view as Popular}  from './components/popular/';
import {view as Home}  from './components/home/';
import {view as Battle}  from './components/battle/';
import {view as Result} from './components/result/';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import {view as Nav} from './components/nav/';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav></Nav>
          <Switch>
              <Route exact path='/' component = {Home}></Route>
              <Route exact path='/battle' component = {Battle}></Route>
              <Route path='/battle/result' component = {Result}></Route>
              <Route path='/popular' component = {Popular}></Route>
              <Route render={function () {
                  return <p>Not Found</p>
                }} />
          </Switch>
         
        </div>
      </Router>
    );
  }
}

export default App;
