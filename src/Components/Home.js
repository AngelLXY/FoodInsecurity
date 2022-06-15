import React from "react";
import { Container, Stack } from "react-bootstrap";
import useScrollPosition from "../Hooks/UseScrollPosition";
import fiVid from "./../Assets/FIV.mp4";
import DispCard from "./DispCard";
import FBsection from "./FBsection";
import Footer from "./Footer";

export default function Home() {
  const scrollPosition = useScrollPosition(1);

  const textCardData = [
    {
      title: "Who are we",
      textArr: [
        "Hello! We are a group of students from 22/05 who are passionate about raising awareness of this pressing issue of food insecurity.",
      ],
      titlecolorclass: "card1text",
      btnlink: "./We",
    },
    {
      title: "What is Food Insecurity?",
      textArr: [
        "Food insecurity occurs whenever the availability of nutritionally adequate and safe foods or the ability to acquire acceptable foods in socially acceptable ways is limited or uncertain.",
      ],
      titlecolorclass: "card2text",
      btnlink: "https://foodbank.sg/what-is-food-insecurity/",
    },
    {
      title: "Aims",
      textArr: [
        "To raise awareness in schools about food insecurity in Singapore.",
        "To understand deeper about food insecurity in Singapore.",
        "To encourage students @ASR to contribute to help reduce food insecurity in Singapore.",
        "To promote the various ways of contributing to reduce food insecurity.",
      ],
      titlecolorclass: "card3text",
      btnlink:
        "https://www.channelnewsasia.com/cnainsider/food-insecurity-hunger-singapore-charity-donations-taskforce-779631",
    },
    {
      title: "Solutions",
      textArr: [
        "To those passionate about solving this critical food insecurity in Singapore, you can do more to help by volunteering at non-governmental organisations such as Food Bank, Food From the Heart, Charity kitchen at Willing hearts. You can find out more about the details of volunteering at such organisation at:",
        <span>
          <a href="https://foodbank.sg/">Foodbank</a>
        </span>,
        <span>
          <a href="https://www.foodfromtheheart.sg/">Food from the heart</a>
        </span>,

        <span>
          <a href="https://willinghearts.org.sg/">
            Charity kitchen at willing hearts
          </a>
        </span>,
      ],

      titlecolorclass: "card4text",
      btnlink:
        "https://www.channelnewsasia.com/cnainsider/food-insecurity-hunger-singapore-charity-donations-taskforce-779631",
    },
  ];

  return (
    <>
      <Container
        fluid
        className="p-0 min-vh-100 bg-dark atextArr-white d-flex flex-column"
        style={{ zIndex: "-1", overflowX: "hidden" }}
      >
        <video
          src={fiVid}
          controls
          muted
          autoPlay
          style={{
            zIndex: "1",
            aspectRatio: "16/9",
            width: "100%",
            margin: "0 auto",
          }}
          className="mt-2"
        ></video>
        <FBsection>
          {textCardData.map((obj) => {
            return (
              <DispCard
                title={obj.title}
                textArr={obj.textArr}
                titlecolorclass={obj.titlecolorclass}
                btn={obj.btnlink}
              />
            );
          })}
        </FBsection>
        {/* <Stack
        className="fs-4 bg-black flex-grow-1"
        style={{ zIndex: "10", height: "25vh" }}
      >
        <header className=" p-2 fs-2" style={{ marginLeft: "1em" }}>
          Who Are We?
        </header>
      </Stack>
      <Stack
        className="fs-4 bg-gray flex-grow-1"
        style={{ zIndex: "10", height: "25vh" }}
      >
        <header className=" p-2 fs-2" style={{ marginLeft: "1em" }}>
          What is Food Insecurity?
        </header>
      </Stack>
      <Stack
        className="fs-4 bg-black flex-grow-1"
        style={{ zIndex: "10", height: "25vh" }}
      >
        <header className=" p-2 fs-2" style={{ marginLeft: "1em" }}>
          Aims
        </header>
      </Stack>
      <Stack
        className="fs-4 bg-grey flex-grow-1"
        style={{ zIndex: "10", height: "25vh" }}
      >
        <header className=" p-2 fs-2" style={{ marginLeft: "1em" }}>
          Solutions
        </header>
      </Stack>
      </Container> */}
      </Container>
      <Footer></Footer>
    </>
  );
}
