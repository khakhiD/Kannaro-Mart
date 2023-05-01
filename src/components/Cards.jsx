import React from "react";
import { Card, ListGroup, InputGroup, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Cards.module.css";
import Img from "./Img";

const Cards = (props) => {
  return (
    <Card style={{ width: "10rem" }}>
      <ListGroup className={classes.group} variant="flush">
        <ListGroup.Item>
          <div className={classes.item}>{props.children}</div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Cards;
