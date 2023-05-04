import React from "react";
import classes from "./Output.module.css";

const Output = ({ gold }) => {
  return (
    <div className={classes.box}>
      <span className={classes.output}>{
        [gold].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }</span>
      <img className={classes.coin} src="/icons/coin.svg" alt="gold" />
    </div>
  );
};

export default Output;
