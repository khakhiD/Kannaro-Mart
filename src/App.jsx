import React from "react";
import { Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";
import Grid from "./components/layouts/Grid";

const App = () => {
  return (
    <>
      <h1>칸나로마트 포스기 </h1>
      <h3>
        <Badge pill bg="dark">
          v0.1
        </Badge>
      </h3>
      <Grid />
    </>
  );
};

export default App;
