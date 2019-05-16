import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
