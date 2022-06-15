import React from 'react'
import { Container } from 'react-bootstrap';

function FBsection(props) {
  return (
    <Container className="bg-darker rounded-3 p-3 d-flex justify-content-evenly flex-wrap">
        {props.children}
    </Container>
  )
}

export default FBsection;