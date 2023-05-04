import Item from "./Item";
import Cards from "../Cards";
import { Button } from "react-bootstrap";
import Output from "./Output";
import data from "../../assets/data";
import classes from "./Grid.module.css";

const iconURI = (name) => {
  return `icons/veggies/${name}.png/`;
};

const repeatItem = (data, m, n) => {
  let arr = [];
  for (let i=m; i<n; i++) {
    arr.push(
        <Item imgSrc={data[i].iconURI} itemName={data[i].name} />
    )
  }
  return arr;
};

export default function Grid() {
  return (
    <div className={classes.container}>
        {repeatItem(data, 0, 11)}
        <Cards className={classes.cards}>
          <Button variant="success" className="mb-1 mt-2">구매계산</Button>
          <Button variant="danger" className="mb-1">판매계산</Button>
          <Button variant="secondary" className="mb-3">리셋하기</Button>
          <Output gold="312315" />
        </Cards>
    </div>
  );
};
