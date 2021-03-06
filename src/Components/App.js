import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { faker } from '@faker-js/faker'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Navbar from './Navbar';
import Home from './Home'
import CreateJob from './CreateJob'
import JobDetails from './JobDetails'



function App() {

  //Initial GET Request
  const [jobs, setJobs] = useState([])
      useEffect(() => {
      fetch('http://localhost:8001/job-listings')
      .then(resp => resp.json())
      .then( jobData => setJobs(jobData))

    }, [])


//Toggle Delete Modal
   const [deleteModalShow, setdeleteModalShow] = useState(false);

   function toggleDeleteModal() {
    setdeleteModalShow(!deleteModalShow)
   }

//Perform Delete
function deleteJob(deletedJob) {


  const newJobList = jobs.filter(job => jobs.indexOf(job) !== jobs.indexOf(deletedJob))

  setJobs(newJobList)

  console.log(deletedJob.id)

  window.location = '/'

fetch(`http://localhost:8001/job-listings/${deletedJob.id}`, {
  method: 'DELETE'
})

}


//Send POST request on form submit
const [formEntry, setFormEntry] = useState()

function createJob(e) {

  e.preventDefault()

  window.location = '/'


  const newJob = {
    id: faker.random.uuid(),
    company: e.target.company.value,
    job_title: e.target.job_title.value,
    short_description: e.target.short_description.value,
    person_of_contact: e.target.poc.value,
    status: e.target.job_status.value,
    location: e.target.location.value,
    date_applied: e.target.date_applied.value,
    website: e.target.website.value,
    notes: e.target.notes.value
  }
  setFormEntry(newJob)

  setJobs([...jobs, formEntry])


  fetch('http://localhost:8001/job-listings', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newJob)
  }).then(res => res.json())
    .then(res => console.log(res));

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
          <Home  jobs={jobs} toggleDeleteModal={toggleDeleteModal} deleteModalShow={deleteModalShow} deleteJob={deleteJob} />
        </Route>
        <Route path="/:id" children={<JobDetails jobs={jobs} toggleDeleteModal={toggleDeleteModal} deleteModalShow={deleteModalShow} deleteJob={deleteJob}/>} />
      </Switch>
    </div>
    </Router>

  );
}

export default App;
