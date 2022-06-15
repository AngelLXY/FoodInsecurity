import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import donationQRcode from "./../Assets/donationQRcode.jpeg";
import DispQR from './DispQR';
import Footer from './Footer';


export default function Donation() {
    const Data = [
        {
          imgname: "Donation QR code:",
          imgsrc: donationQRcode,
          text: "Donation link: ",
          link:
        [<span>
          <a href="https://www.giving.sg/campaigns/food_bank_sg_x_asrjc">https://www.giving.sg/campaigns/food_bank_sg_x_asrjc</a>
        </span>]
        },
        
      ];
  return (
    <>
    <Container fluid className="bg-dark min-vh-100 pt-5 pb-4">
      <Container className="h-auto text-white">
        <Stack
          className="rounded-3 pt-3 pb-3"
          style={{ backgroundColor: "#111111" }}
        >
          <header className="display-4 text-white ps-3 fw-bold">
            Donation
          </header>
          <Container className="d-flex justify-content-evenly flex-wrap">
            {Data.map((obj)=> { return (
                <DispQR
                name = {obj.imgname}
                QRcode = {obj.imgsrc}
                text = {obj.text}
                btn = {obj.link}>
                </DispQR>
            )})}
          </Container>
        </Stack>
      </Container>
    </Container>
    <Footer></Footer>
  </>
  )
}
