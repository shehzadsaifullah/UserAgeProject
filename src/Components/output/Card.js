const Card = (props) => {
  return (
    <ul>
      <li>
        <div>{props.name}</div>
        <div>{props.age}</div>
      </li>
    </ul>
  );
};
export default Card;
