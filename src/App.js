import React from 'react';
import Main from './components/Main';
import './index.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
    </Router>
  );
}

export default App;
