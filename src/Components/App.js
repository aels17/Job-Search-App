import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import faker from 'faker';
import '../App.css';
import Navbar from './Navbar';
import Home from './Home'
import CreateJob from './CreateJob'


function App() {


  //Initial GET Request
  const [jobs, setJobs] = useState([])
      useEffect(() => {
      fetch('http://localhost:8001/job-listings')
      .then(resp => resp.json())
      .then( jobData => setJobs(jobData))

    }, [])


//Send POST request on form submit
function createJob(e) {

  e.preventDefault()


  const newJob = {
    id: faker.random.uuid(),
    company: e.target.company.value,
    job_title: e.target.job_title.value,
    short_description: e.target.short_description.value,
    status: e.target.job_status.value,
    location: e.target.location.value,
    date_applied: e.target.date_applied,
    website: e.target.website.value,
    notes: e.target.notes.value
  }

  console.log(newJob)


}



  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/create-job">
          <CreateJob createJob={createJob} />
        </Route>
        <Route exact path="/">
          <Home  jobs={jobs}/>
        </Route>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
