import React from "react";
import { Button, Card } from "react-bootstrap";

export default function DispCard({
  title,
  subtitle,
  textArr,
  titlecolorclass,
  btn,
}) {
  return (
   
      <Card
        className={`m-2 bg-dark flex-grow-1 shadow`}
        style={{ width: "44%", minWidth: "300px" }}
      >
        <Card.Body>
          <Card.Title className={`fs-1 ${titlecolorclass}`}>{title}</Card.Title>
          {textArr.map(function (text) {
            return (
              <>
                <Card.Text className="fs-5 text-white">{text}</Card.Text>
                <br />
              </>
            );
            {
              /*react fragment wrap over two childs to make them one child*/
            }
          })}
          <Button
            className="btn-secondary fs-6"
            style={{ float: "right" }}
            href={btn}
          >
            MORE
          </Button>
        </Card.Body>
      </Card>
      
  );
}
