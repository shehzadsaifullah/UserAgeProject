const Card = (props) => {
  return (
    <ul>
      <div>
        {props.name} is {props.age} years old
      </div>
    </ul>
  );
};
export default Card;
