import React from 'react';
import Layout from './components/layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Signin from './containers/Signin';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <switch>
            <Route path = '/' exact component = {Home}/>
            <Route path = '/signup' component = {Signup}/>
            <Route path = '/signin' component = {Signin}/>
          </switch>
        </Router>
      </div>
    </>
  );
}

export default App;
