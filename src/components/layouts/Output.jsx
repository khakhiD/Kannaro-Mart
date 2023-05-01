import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import classes from "./Output.module.css";

const dot = (gold) => {
  let result;
  if (gold % 1000 === 0)
  return result
}

const Output = ({ gold }) => {
  return (
    <div className={classes.box}>
      <FontAwesomeIcon icon={faCoins} size="xl" style={{ color: "#ffdd00" }} />
      <span className={classes.output}>{gold}</span>
    </div>
  );
};

export default Output;
