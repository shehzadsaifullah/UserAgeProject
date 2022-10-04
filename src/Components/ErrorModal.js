import Card from "./output/Card";
import classes from "./ErrorModal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <button onClick={props.onClick}>okay</button>
      </footer>
    </div>
  );
};

//  <React.Fragment>
//    <div className={classes.backdrop} onClick={props.onConfirm}></div>
//    <div className={classes.modal}>
//      <header className={classes.header}>
//        <h2>{props.title}</h2>
//      </header>
//      <div className={classes.content}>
//        <p>{props.message}</p>
//      </div>
//      <footer className={classes.actions}>
//        <button onClick={props.onConfirm}>okay</button>
//      </footer>
//    </div>
//  </React.Fragment>;
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
