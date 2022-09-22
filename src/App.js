import React, { useState } from "react";
import InputForm from "./Components/inputForm/InputForm";
import Output from "./Components/output/Output";

function App() {
  const users = [
    {
      name: "Jimmy",
      age: "28",
    },
    {
      name: "Peter",
      age: "32",
    },
  ];
  const [userArray, setUserArray] = useState(users);

  const userDataHandler = (name, age) => {
    setUserArray((prevExpenses) => {
      return [{ name: name, age: age }, ...prevExpenses];
    });
  };

  console.log(userArray);

  return (
    <div>
      <InputForm reciveUserData={userDataHandler} />
      <Output userList={userArray} />
    </div>
  );
}

export default App;
