import React from "react";
import classes from "./SettingGrid.module.css";
import data from "../../assets/data";
import { Container, Row, Col, Image, InputGroup, Form } from "react-bootstrap";

const SettingGrid = () => {
  return (
    <Container>
      <ul className={classes.itemList}>
        {data.map(function (i) {
          return (
            <li key={i.key} className={classes.item}>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text
                  id="inputGroup-sizing-sm"
                  style={{
                    width: "auto",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 600,
                  }}
                >
                  <Image
                    src={i.iconURI}
                    style={{ height: 24 + "px", borderRadius: 100 }}
                  />
                </InputGroup.Text>
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder={`${i.name} 원가`}
                />
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="+ 판매 추가금"
                />
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="+ 구매 추가금"
                />
              </InputGroup>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default SettingGrid;
