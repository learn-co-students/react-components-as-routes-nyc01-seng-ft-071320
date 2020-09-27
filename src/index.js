import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Login from './Login'
import About from './About'
import Home from './Home'
import NavBar from './NavBar'

ReactDOM.render((
  <Router>
    <div>
      <NavBar/>
      <Route path="/" component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/about' component={About} />
    </div>
  </Router>),

  document.getElementById('root')
);

