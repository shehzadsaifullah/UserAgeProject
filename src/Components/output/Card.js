import classes from "./Outcard.module.css";

const Card = (props) => {
  return (
    <ul className={classes.users}>
      <div>
        {props.name} is {props.age} years old
      </div>
    </ul>
  );
};
export default Card;
