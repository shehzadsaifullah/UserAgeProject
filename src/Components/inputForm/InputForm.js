import { useState, useRef } from "react";
import classes from "./Intput.module.css";
import classe from "./Button.module.css";
import ErrorModal from "../ErrorModal";
// import Button from "./Button";
const InputForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current);
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "invalid Input - name",
        message: "please enter valid name",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "invalid Input - age",
        message: "please enter valid age",
      });
      //the + turns userAge into a nu mber from the string
      return;
    }
    props.reciveUserData(userName, userAge);
    setUserName("");
    setUserAge("");
  };

  const nameHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageHandler = (event) => {
    setUserAge(event.target.value);
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
              <label htmlFor="username">Name</label>
              <input
                id="username"
                value={userName}
                name="name"
                onChange={nameHandler}
                ref={nameInputRef}
              ></input>
            </div>
            <div>
              <label htmlFor="userage">Age</label>
              <input
                id="userage"
                value={userAge}
                name="age"
                onChange={ageHandler}
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
