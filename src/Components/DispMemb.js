import React from "react";
import { Card } from "react-bootstrap";

export default function DispMemb({ imgsrc, name, desc }) {
  return (
    <Card className="bg-darker mt-2" style={{ width: "45%", minWidth: "300px" }}>
      <Card.Img
        variant="top"
        src={imgsrc}
        style={{ width: "100%", objectFit: "cover", aspectRatio: "1" }}
      />
      <Card.Body>
        <Card.Title className="text-warning">{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}
