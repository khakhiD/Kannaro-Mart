import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="buy" className=" ">
      <Nav.Item>
        <Nav.Link eventKey="buy">구매</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="sell">판매</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="setting">설정</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}