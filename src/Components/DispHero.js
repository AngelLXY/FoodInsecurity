import React from "react";
import { Button, Card, Container, Stack } from "react-bootstrap";

export default function DispHero({
  title,
  textArr,
  bgColorClass,
  subTitle,
  btn,
}) {
  return (
    <>
      <Stack
        direction="horizontal"
        className={`fs-5 w-100 text-white rounded-3 mt-3 mb-3 h-auto ${bgColorClass}`}
      >
        <Card className={`${bgColorClass} p-2 w-100`}>
          <Card.Body>
            <Card.Title className="fs-2 mb-3">{title}</Card.Title>
            <Card.Subtitle className="fs-4 text-muted mb-2">
              {subTitle}
            </Card.Subtitle>
            {textArr.map(function (text) {
              return <p>{text}</p>;
            })}

            <Button
              href={btn}
              className="btn-secondary fs-6 ps-3 pe-3"
              style={{ float: "right" }}
            >
              CLICK
            </Button>
          </Card.Body>
        </Card>
      </Stack>
    </>
  );
}
