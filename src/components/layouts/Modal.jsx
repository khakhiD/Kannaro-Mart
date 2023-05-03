import classes from "./Modal.module.css";
import { Button, Card } from "react-bootstrap";
import SettingGrid from "./SettingGrid";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <p>{props.title}</p>
      </header>
      <div className={classes.content}>
        <SettingGrid />
      </div>
      <footer className={classes.actions}>
        <p>
          <Button
            variant="secondary"
            className="ml-5"
            onClick={props.onConfirm}
          >
            저장하기
          </Button>
          <Button
            variant="secondary"
            className="ml-5"
            onClick={props.onConfirm}
          >
            불러오기
          </Button>
        </p>

        <p>
          <Button
            variant="success"
            onClick={props.onConfirm}
          >
            설정하기
          </Button>
        </p>
      </footer>
    </Card>
  );
};

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-root")
      )}
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
}

export default Modal;
