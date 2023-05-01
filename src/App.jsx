import React from "react";
import { Badge, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";
import Grid from "./components/layouts/Grid";
import Navbar from "./components/layouts/Navbar";

const App = () => {
  return (
    <>
      <div className={classes.header}>
        <div>
          <h4>
            <Badge pill bg="danger">
              ver 0.1
            </Badge>
          </h4>
          <h1 className={classes.heading}>칸나로마트 포스기</h1>
        </div>

        <div className={classes.setBtn}>
          <a href="" className="mb-1 mt-2">
            가격 설정
          </a>
        </div>
      </div>

      {/* <div className="navbar">
        <div className="buy">구매</div>
        <div className="buy">판매</div>
        <div className="buy">설정</div>
      </div> */}
      <Grid />

      {/* <Grid /> */}
    </>
  );
};

export default App;
