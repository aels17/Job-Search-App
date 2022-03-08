import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Navbar from './Navbar';
import Home from './Home'
import CreateJob from './CreateJob'


function App() {
  return (
    <Router>

    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/create-job">
          <CreateJob />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
