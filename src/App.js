import React, { useState } from "react";
import InputForm from "./Components/inputForm/InputForm";
import Output from "./Components/output/Output";

function App() {
  //const users = [];
  const [userArray, setUserArray] = useState([]);

  const userDataHandler = (name, age) => {
    setUserArray((prevExpenses) => {
      return [
        ...prevExpenses,
        { name: name, age: age, id: Math.random().toString() },
      ];
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
