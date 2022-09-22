import { useState } from "react";
import classes from "./Intput.module.css";
import classe from "./Button.module.css";
// import Button from "./Button";
const InputForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (+userAge < 1) {
      //the + turns userAge into a number from the string
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

  return (
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
            ></input>
          </div>
          <div>
            <label htmlFor="userage">Age</label>
            <input
              id="userage"
              value={userAge}
              name="age"
              onChange={ageHandler}
            ></input>
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
