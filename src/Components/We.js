import React from "react";
import { Container, Stack } from "react-bootstrap";
import srImg1 from "./../Assets/SVLFormal.jpg";
import srImg2 from "./../Assets/SVLInformal.jpg";
import DispMemb from "./DispMemb";
import Footer from "./Footer";

export default function We() {
  const groupData = [
    {
      imgsrc: srImg1,
      
      name: "Name:",
      desc: "Akhilesh,Tauzih, Chinnapat, Chretienne, Phea, XinYan",
    },
    { imgsrc: srImg2, name: "", desc: "Wweweweweeeweweweeee~~" },
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
              Members
            </header>
            <Container className="d-flex justify-content-evenly flex-wrap">
              {groupData.map((obj) => {
                return (
                  <DispMemb
                    name={obj.name}
                    imgsrc={obj.imgsrc}
                    desc={obj.desc}
                  ></DispMemb>
                );
              })}
            </Container>
          </Stack>
        </Container>
      </Container>
      <Footer></Footer>
    </>
  );
}
