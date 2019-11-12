import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pages from './pages';

function App() {
  return (
    <Router>
      <div>
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/">
            <Pages.FirstPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
