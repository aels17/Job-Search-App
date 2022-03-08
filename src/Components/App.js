import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Navbar from './Navbar';
import Home from './Home'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
