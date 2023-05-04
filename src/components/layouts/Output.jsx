import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import classes from "./Output.module.css";

const Output = ({ gold }) => {
  return (
    <div className={classes.box}>
      <FontAwesomeIcon icon={faCoins} size="xl" style={{ color: "#ffdd00" }} />
      <span className={classes.output}>{
        [gold].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }</span>
    </div>
  );
};

export default Output;
