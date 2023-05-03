import Item from "./Item";
import Cards from "../Cards";
import { Container, Row, Col, Button } from "react-bootstrap";
import Output from "./Output";
import data from "../../assets/data";

const iconURI = (name) => {
  return `icons/veggies/${name}.png/`;
};

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


export default function Grid() {
  return (
    <Container>
      <Row className="mb-3">
        {repeatItem(data, 0, 4)}
      </Row>

      <Row className="mb-3">
        {repeatItem(data, 4, 8)}
      </Row>

      <Row className="mb-3">
        {repeatItem(data, 8, 11)}
        <Col>
          <Cards>
            <Button variant="success" className="mb-1 mt-2">구매계산</Button>
            <Button variant="danger" className="mb-1">판매계산</Button>
            <Button variant="secondary" className="mb-2">리셋하기</Button>
          </Cards>
          <Output gold="3000" />
        </Col>
      </Row>
    </Container>
  );
}
