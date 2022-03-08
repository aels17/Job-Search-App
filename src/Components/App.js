import React from 'react';
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Navbar from './Navbar';
import Home from './Home'
import CreateJob from './CreateJob'


function App() {
  return (
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
  );
}

export default App;
