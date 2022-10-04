import { useState, useRef } from "react";
import classes from "./Intput.module.css";
import classe from "./Button.module.css";
import ErrorModal from "../ErrorModal";
// import Button from "./Button";
const InputForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid Input - name",
        message: "please enter valid name",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid Input - age",
        message: "please enter valid age",
      });
      //the + turns userAge into a nu mber from the string
      return;
    }
    props.reciveUserData(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const okayButton = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          onConfirm={okayButton}
          title={error.title}
          message={error.message}
        />
      )}
      <div className={classes.card}>
        <div className={classes.input}>
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="enteredname">Name</label>
              <input
                id="enteredname"
                //value={enteredName}
                name="name"
                //onChange={nameHandler}
                ref={nameInputRef}
              ></input>
            </div>
            <div>
              <label htmlFor="enteredage">Age</label>
              <input
                id="enteredage"
                //value={enteredAge}
                name="age"
                //onChange={ageHandler}
                ref={ageInputRef}
              ></input>
            </div>
            <button className={classe.button} type="submit">
              Add User
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputForm;
