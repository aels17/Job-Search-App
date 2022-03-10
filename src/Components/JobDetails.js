import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'



function NavBar({jobs}) {

    const [job, setJob] = useState([])

    let {id} = useParams()

    let selectedJob = jobs.filter(job => job.id.toString() === id.toString())

    useEffect(() => {
        if (selectedJob[0] !== undefined) {
            setJob(selectedJob[0])
        }
    }, [selectedJob])


    const {company, website, job_title, short_description, date_applied, location, notes, status} = job
    

  return (
        <Container className=" p-2">
            <Row className="d-flex justify-content-center my-3">
                <Badge style={{textAlign: "center", maxWidth: "150px", margin: "auto", marginBottom: "20px"}}>{status}</Badge>
                <h1 style={{textAlign: "center"}}>{company}</h1>
                <p style={{textAlign: "center"}}>{location}</p>

            </Row>
            <Row className="my-3 justify-content-center">
                <Col>
                    <Card className="py-3 h-100" style={{textAlign: "center"}}>
                        <strong >Job Title </strong>
                        <p style={{marginBottom: "0"}}>{job_title}</p>  
                    </Card>       
                </Col>
                <Col>
                    <Card className="py-3 h-100" style={{textAlign: "center"}}>
                    <strong >Date Applied </strong>
                <p style={{marginBottom: "0"}}>{date_applied}</p>  
                    </Card>       
                </Col>
                <Col>
                    <Card className="py-3 h-100" style={{textAlign: "center"}}>
                    <strong style={{}}>Website </strong>
                    <a href={website} target="_blank" rel="noreferrer">{website}</a>   
                    </Card>       
                </Col>
            </Row>
            <Row className="my-3 mt-5 justify-content-center">             
                <h3 style={{}}>Description</h3>
                <p>{short_description}</p>  
            </Row>
            <Row className="my-3 justify-content-left">
                <h3 style={{}}>Notes </h3>
                <p>{notes}</p>  
            </Row>
        </Container>
  );
}


export default NavBar;
