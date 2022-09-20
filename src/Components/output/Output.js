//import { useState } from "react";
import Card from "./Card";

const Output = (props) => {
  //const [dummy, setDummy] = useState(props.d);
  return (
    <div>
      {props.userList.map((user) => (
        <div>
          <Card name={user.name} age={user.age} />
        </div>
      ))}
    </div>
  );
};
export default Output;
