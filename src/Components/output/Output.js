//import { useState } from "react";

import Card from "./Card";
import classes from "./Outcard.module.css";

const Output = (props) => {
  //const [dummy, setDummy] = useState(props.d);
  return (
    <div className={classes.output}>
      {props.userList.map((user) => (
        <div key={user.id}>
          <Card name={user.name} age={user.age} />
        </div>
      ))}
    </div>
  );
};
export default Output;
