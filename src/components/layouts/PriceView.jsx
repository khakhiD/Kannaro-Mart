import React from "react";
import {
  ListGroup,
  Button,
  OverlayTrigger,
  Tooltip,
  Popover,
} from "react-bootstrap";
import data from "../../assets/data";
import classes from "./PriceView.module.css";

const repeatItem = (data, m, n) => {
  let arr = [];
  for (let i = m; i < n; i++) {
    arr.push(
      <Col>
        <Item imgSrc={data[i].iconURI} itemName={data[i].name} />
      </Col>
    );
  }
  return arr;
};

const PriceView = () => {
  return (
    <>
      <div className={classes.container}>
        <ListGroup as="ul" horizontal="sm" className={classes.listGroup}>
          {data.map(function (i) {
            return (
              <>
                <OverlayTrigger
                  trigger="click"
                  key="top"
                  placement="top"
                  overlay={
                    <Popover id={`popover-positioned-top`}>
                      <Popover.Body>
                        <strong>원가: {i.price}</strong><br/>
                        <strong>구매: {i.price + 15}</strong><br/>
                        <strong>판매: {i.price + 20}</strong>
                      </Popover.Body>
                    </Popover>
                  }
                >
                    <ListGroup.Item
                      className={classes.lgItem}
                      style={{
                        width: "auto",
                        textAlign: "center",
                        cursor: "pointer"
                      }}
                    >
                      {i.name}
                    </ListGroup.Item>
                </OverlayTrigger>
              </>
            );
          })}
        </ListGroup>
      </div>
    </>
  );
};

export default PriceView;
