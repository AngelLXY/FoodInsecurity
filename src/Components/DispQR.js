import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DispQR({ name, QRcode, text, btn }) {
  return (
    <Card
      className="bg-darker mt-2"
      style={{ width: "45%", minWidth: "300px" }}
    >
      <Card.Title className="text-warning">{name}</Card.Title>
      <Card.Img
        variant="top"
        src={QRcode}
        style={{ width: "100%", objectFit: "cover", aspectRatio: "1" }}
      />
      <Card.Body>
        <Card.Text>
          {text}
          {btn}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
