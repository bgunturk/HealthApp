import React from 'react';
import Main from './components/Main';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
    </Router>
  );
}
