import React from "react";
import { Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";
import Grid from "./components/layouts/Grid";

const App = () => {
  return (
    <>
      <div className={classes.header}>
        <h1>칸나로마트 포스기</h1>
        <h4>
          <Badge pill bg="dark">
            ver 0.1
          </Badge>
        </h4>
      </div>

      <Grid />
    </>
  );
};

export default App;
