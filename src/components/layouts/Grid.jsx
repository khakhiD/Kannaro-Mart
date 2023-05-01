import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "./Item";
import Cards from "../Cards";

export default function Grid() {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className="mb-3">
        <Col>
          <Item imgSrc="icons/rice.png/" itemName="쌀" />
        </Col>
        <Col>
          <Item imgSrc="icons/대파.webp" itemName="대파" />
        </Col>
        <Col>
          <Item imgSrc="icons/tomato.png" itemName="토마토" />
        </Col>
        <Col>
          <Item imgSrc="icons/tomato.png" itemName="토마토" />
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row className="mb-3">
        <Col>
          <Item imgSrc="icons/strawberry.png" itemName="딸기" />
        </Col>
        <Col>
          <Item imgSrc="icons/pepper.jpg" itemName="고추" />
        </Col>
        <Col>
          <Item imgSrc="icons/대파.webp" itemName="대파" />
        </Col>
        <Col>
          <Item imgSrc="icons/tomato.png" itemName="토마토" />
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row className="mb-3">
        <Col>
          <Item imgSrc="icons/rice.png/" itemName="쌀" />
        </Col>
        <Col>
          <Item imgSrc="icons/대파.webp" itemName="대파" />
        </Col>
        <Col>
          <Item imgSrc="icons/tomato.png" itemName="토마토" />
        </Col>
        <Col>
          <Cards />
        </Col>
      </Row>
    </Container>
  );
}
