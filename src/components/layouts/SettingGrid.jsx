import React from "react";
import classes from "./SettingGrid.module.css";
import data from "../../assets/data";
import { Container, Button, Row, Col, Image, InputGroup, Form } from "react-bootstrap";

const SettingGrid = () => {
  return (
    <Container>
      <ul className={classes.itemList}>
        <li className={classes.item}>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text
              id="inputGroup-sizing-sm"
              style={{
                width: "auto",
                display: "flex",
                alignItems: "center",
                fontWeight: 600,
              }}
            >
              일괄
            </InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="판매 추가금"
              style={{textAlign: "center", }}
            />
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="구매 추가금"
              style={{textAlign: "center"}}
            />
            <Button variant="outline-secondary" id="button-addon2">
              적용
            </Button>
          </InputGroup>
        </li>
        {data.map(function (i) {
          return (
            <li key={i.key} className={classes.item}>
              <InputGroup size="sm" className="mb-1">
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
                    style={{
                      height: 30 + "px",
                      width: 30 + "px",
                      borderRadius: 100,
                    }}
                  />
                </InputGroup.Text>
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder={`${i.name} 원가`}
                  style={{textAlign: "right"}}
                />
                <InputGroup.Text style={{background: "#198752", color:"#fff"}}>구매</InputGroup.Text>
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="+ 추가금"
                  style={{textAlign: "right"}}
                />
                <InputGroup.Text style={{background: "#dc3545", color:"#fff"}}>판매</InputGroup.Text>
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="+ 추가금"
                  style={{textAlign: "right"}}
                />
              </InputGroup>
            </li>
          );
        })}
      </ul>
      <p className={classes.caution}>
        판매 혹은 구매 총 금액은 <span>원가에 추가금을 더한 가격</span>으로
        설정됩니다.
      </p>
    </Container>
  );
};

export default SettingGrid;
