import Item from "./Item";
import Cards from "../Cards";
import { Container, Row, Col, Button } from "react-bootstrap";
import Output from "./Output";

const iconURI = (name) => {
  return `icons/veggies/${name}.png/`;
};

export default function Grid() {
  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <Item imgSrc={iconURI("쌀")} itemName="쌀" />
        </Col>
        <Col>
          <Item imgSrc={iconURI("고구마")} itemName="고구마" />
        </Col>
        <Col>
          <Item imgSrc={iconURI("배추")} itemName="배추" />
        </Col>
        <Col>
          <Item imgSrc={iconURI("옥수수")} itemName="옥수수" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Item imgSrc={iconURI("고추")} itemName="고추" />
        </Col>
        <Col>
          <Item imgSrc={iconURI("무")} itemName="무" />
        </Col>
        <Col>
          <Item imgSrc={iconURI("대파")} itemName="대파" />
        </Col>
        <Col>
          <Item imgSrc={iconURI("양파")} itemName="양파" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Item imgSrc={iconURI("토마토")} itemName="토마토" />
        </Col>
        <Col>
          <Item imgSrc={iconURI("바질")} itemName="바질" />
        </Col>
        <Col>
          <Item imgSrc={iconURI("딸기")} itemName="딸기" />
        </Col>
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
