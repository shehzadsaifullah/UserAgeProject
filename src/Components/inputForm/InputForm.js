import { useState } from "react";
import classes from "./Intput.module.css";
import classe from "./Button.module.css";
// import Button from "./Button";
const InputForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const submitHandler = (event) => {
    props.reciveUserData(userName, userAge);
    event.preventDefault();
  };

  const nameHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageHandler = (event) => {
    setUserAge(event.target.value);
  };

  return (
    <div className={classes.card}>
      <div className={classes.input}>
        <form onSubmit={submitHandler}>
          <div>
            <label>Name</label>
            <input name="name" onChange={nameHandler}></input>
          </div>
          <div>
            <label>Age</label>
            <input name="age" onChange={ageHandler}></input>
          </div>
          <button className={classe.button} type="submit">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
