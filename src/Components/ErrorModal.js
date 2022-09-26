import Card from "./output/Card";
import classes from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <button>okay</button>
      </footer>
    </div>
  );
};
export default ErrorModal;
