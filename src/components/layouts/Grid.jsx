import Item from "./Item";
import Cards from "../Cards";
import { Container, Row, Col, Button } from "react-bootstrap"

const iconURI = (name) => {
  return `icons/veggies/${name}.png/`;
}

export default function Grid() {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className="mb-3">
        <Col>
          <Item imgSrc={iconURI('쌀')} itemName="쌀" />
        </Col>
        <Col>
          <Item imgSrc={iconURI('고구마')} itemName="고구마" />
        </Col>
        <Col>
          <Item imgSrc={iconURI('배추')} itemName="배추" />
        </Col>
        <Col>
          <Item imgSrc={iconURI('옥수수')} itemName="옥수수" />
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row className="mb-3">
        <Col>
          <Item imgSrc={iconURI('고추')} itemName="고추" />
        </Col>
        <Col>
          <Item imgSrc={iconURI('무')} itemName="무" />
        </Col>
        <Col>
          <Item imgSrc={iconURI('대파')} itemName="대파" />
        </Col>
        <Col>
          <Item imgSrc={iconURI('양파')} itemName="양파" />
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row className="mb-3">
        <Col>
          <Item imgSrc={iconURI('토마토')} itemName="토마토" />
        </Col>
        <Col>
          <Item imgSrc={iconURI('바질')} itemName="바질" />
        </Col>
        <Col>
          <Item imgSrc={iconURI('딸기')} itemName="딸기" />
        </Col>
        <Col>
          <Cards>
            <Button></Button>
          </Cards>
        </Col>
      </Row>
    </Container>
  );
}
