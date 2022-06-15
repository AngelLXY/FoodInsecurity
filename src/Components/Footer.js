import React from 'react';
import { Container, Stack } from 'react-bootstrap';


export default function Footer() {
  return (
    <Container fluid className=" bg-black h-auto text-muted">
        <Stack className=" ps-4 pe-4"> 
        <p className=" fs-5">
            This site is presented to you by <span style={{color:"yellow"}}>XinYan</span> with help from Ferrois and STEM Inc. member. 
            Please contact me if you encounter any bugs in this website through my email: <span style={{color:"white"}}>162133128qq@gmail.com</span> 
        </p></Stack>
    </Container>
    )

}
