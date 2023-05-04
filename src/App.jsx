import { useState } from "react";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";
import PriceView from "./components/layouts/PriceView";
import Grid from "./components/layouts/Grid";
import Modal from "./components/layouts/Modal";

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const modalOpenHandler = () => {
    setModalIsVisible(true);
  };
  const modalCloseHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      {modalIsVisible && (
        <Modal title="가격 설정" message="testing..." onConfirm={modalCloseHandler} />
      )}
      <div className={classes.header}>
        <div>
          <h4>
            <Badge pill bg="danger">
              ver 0.2
            </Badge>
          </h4>
          <h1 className={classes.heading}>칸나로마트 포스기</h1>
        </div>

        <div className={classes.setBtn} onClick={modalOpenHandler}>
          <p>가격 설정</p>
          <p>
            <FontAwesomeIcon
              icon={faGear}
              size="md"
              style={{ color: "#dc3545", faDisplay: "flex" }}
            />
          </p>
        </div>
      </div>
      <Grid />
      <PriceView />

      {/* <Grid /> */}
    </>
  );
};

export default App;
