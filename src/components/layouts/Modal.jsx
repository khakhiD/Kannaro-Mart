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
        <p>{props.message}</p>
        <SettingGrid />
      </div>
      <footer className={classes.actions}>
        <Button variant="secondary" className="mb-1 mt-2 mr-5" onClick={props.onConfirm}>
          저장
        </Button>
        <Button variant="success" className="mb-1 mt-2" onClick={props.onConfirm}>
          설정
        </Button>
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
        <Backdrop onConfirm={props.onConfirm}/>,
        document.getElementById("backdrop-root")
      )}
    </>
  );
}

export default Modal;
