import React from "react";
import { Container, Stack } from "react-bootstrap";
import useScrollPosition from "../Hooks/UseScrollPosition";
import DispHero from "./DispHero";
import Footer from "./Footer";

export default function More() {
  const scrollPosition = useScrollPosition(1);

  const textMoreData = [
    {
      title: "SMU research report on Singapore Food Insecurity",
      subTitle: "--- SMU",
      textArr: [
        "Summary of information:",
        "Current issue of food insecurity in Singapore (causes, people)",
        "Current measures taken to tackle food insecurity in Singapore (GOV, NGOs)",
        "What food bank sg does",
      ],
      bgColorClass: "bg-darker",
      btnLink:
        "https://ink.library.smu.edu.sg/cgi/viewcontent.cgi?article=1011&context=lien_reports",
    },
    {
      title: "Why there is Food Insecurity in Singapore?",
      subTitle: "--- CNA",
      textArr: [
        "Summary of information:",
        "A study conducted by the Lien Centre showed that out of 236 Singaporeans from 4 low-income neighbourhoods surveyed,1 in 5 participants reported severe food insecurity in 2018.",
      ],
      bgColorClass: "bg-darker",
      btnLink:
        "https://www.channelnewsasia.com/cnainsider/food-insecurity-singapore-hunger-poverty-777806",
    },

    {
      title: "How COVID worsens food insecurity in Singapore?",
      subTitle: "--- The Business Times",
      textArr: [
        "The Food Bank's 2020 Hunger Report showed that one in 10 Singaporeans experienced food insecurity at least once over 12 months.",
      ],
      bgColorClass: "bg-darker",
      btnLink:
        "https://www.businesstimes.com.sg/life-culture/hunger-and-food-insecurity-still-exist-in-our-gourmet-paradise",
    },
    {
      title: "The Hunger Report",
      subTitle: "--- FOODBANK",
      textArr: [
        "The Hunger Report Part II: Targeting Specific Needs in the Wake of Covid-19 aimed to dive into how the food situation of previously identified food-insecure households has changed during the COVID-19 pandemic.",
      ],
      bgColorClass: "bg-darker",
      btnLink:
        "https://foodbank.sg/what-is-food-insecurity/the-hunger-report-2021/",
    },
  ];
  return (
    <>
      <Container fluid className="bg-dark min-vh-100 pt-5 pb-4">
        <Container className="h-auto text-white">
          {textMoreData.map((obj) => {
            return (
              <DispHero
                title={obj.title}
                subTitle={obj.subTitle}
                textArr={obj.textArr}
                bgColorClass={obj.bgColorClass}
                btn={obj.btnLink}
              />
            );
          })}
        </Container>
      </Container>
      <Footer></Footer>
    </>
  );
}
