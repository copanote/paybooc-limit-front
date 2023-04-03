const LinkItem = (props) => {
  return (
    <li className="link">
      <a href={props.link}>{props.title}</a>
    </li>
  );
};

export default LinkItem;
