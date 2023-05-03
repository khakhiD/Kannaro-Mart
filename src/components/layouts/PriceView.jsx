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
      {/* <Table responsive="sm" striped bordered hover variant="dark">
        <thead>
          <tr>
            {Array.from({ length: 6 }).map((_, index) => (
              <th colSpan={3} key={index}>
                쌀
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Array.from({ length: 18 }).map((_, index) => (
              <td key={index}>쌀{index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
      <Table responsive="sm" striped bordered hover variant="dark">
        <thead>
          <tr>
            {Array.from({ length: 5 }).map((_, index) => (
              <th colSpan={3} key={index}>
                쌀
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Array.from({ length: 15 }).map((_, index) => (
              <td key={index}>쌀{index}</td>
            ))}
          </tr>
        </tbody>
      </Table> */}

      <div className={classes.container}>
        <ListGroup as="ul" horizontal="sm" className={classes.listGroup}>
          {data.map(function (i) {
            return (
              <>
                <OverlayTrigger
                  trigger="hover"
                  key="bottom"
                  placement="bottom"
                  overlay={
                    <Popover id={`popover-positioned-bottom`}>
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
