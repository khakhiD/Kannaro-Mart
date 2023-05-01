import React from "react";
import { Card, ListGroup, InputGroup, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Item.module.css";
import Img from "../Img";

const Item = (props) => {
  return (
    <Card style={{ width: "10rem" }}>
      <ListGroup className={classes.group} variant="flush">
        <ListGroup.Item className={classes.groupItem}>
          <Img src={props.imgSrc} className={classes.image}/>
          <p>{props.itemName}</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <InputGroup className="mb-1">
            <InputGroup.Text>낱개</InputGroup.Text>
            <Form.Control placeholder="0개" />
          </InputGroup>
          <InputGroup className="mb-1">
            <InputGroup.Text>세트</InputGroup.Text>
            <Form.Control placeholder="0셋" />
          </InputGroup>
          <InputGroup className="mb-1">
            <InputGroup.Text>박스</InputGroup.Text>
            <Form.Control placeholder="0박스" />
          </InputGroup>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Item;
