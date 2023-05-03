import React from "react";
import { ListGroup, Table } from "react-bootstrap";
import data from "../../assets/data";
import classes from "./PriceView.module.css";

const repeatItem = (data, m, n) => {
  let arr = [];
  for (let i=m; i<n; i++) {
    arr.push(
      <Col>
        <Item imgSrc={data[i].iconURI} itemName={data[i].name} />
      </Col>
    )
  }
  return arr;
}

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
                <ListGroup.Item style={{ width: "auto", textAlign:"center", fontWeight:"600" }}>
                  {i.name}
                  <ListGroup as="ul" style={{fontWeight:"400", marginTop:10}}>
                    <ListGroup.Item>{i.price}</ListGroup.Item>
                    <ListGroup.Item>{i.price /* +추가금 */}</ListGroup.Item>
                    <ListGroup.Item>{i.price /* +추가금 */}</ListGroup.Item>
                  </ListGroup>
                </ListGroup.Item>
              </>
            );
          })}
        </ListGroup>
      </div>
    </>
  );
};

export default PriceView;
