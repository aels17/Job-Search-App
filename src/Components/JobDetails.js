import React from 'react';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container'



function NavBar({jobs}) {

    let {id} = useParams()



     const pickedJob = jobs.filter(job => job.id.toString() === id.toString())


     function checkDefined() {
        if (pickedJob[0] !== undefined) {

            const [{company}] = pickedJob
    
         }

     }


  return (
        <Container className="d-flex justify-content-end p-2">
                {pickedJob === undefined ? null : console.log('test')}



        </Container>
  );
}


export default NavBar;
