import React, { useState } from "react";
import InputForm from "./Components/inputForm/InputForm";
import Output from "./Components/output/Output";

function App() {
  const user = [
    {
      name: "Jimmy",
      age: "28",
    },
    {
      name: "Peter",
      age: "32",
    },
  ];
  const [userArray, setUserArray] = useState(user);

  const userDataHandler = (name, age) => {
    setUserArray((prevExpenses) => {
      return [{ name: name, age: age }, ...prevExpenses];
    });
  };

  console.log(userArray);

  return (
    <div>
      <InputForm reciveUserData={userDataHandler} />
      <Output userList={user} />
    </div>
  );
}

export default App;
