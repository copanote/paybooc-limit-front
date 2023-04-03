const LinkItem = (props) => {
  const { limit, isApproximate } = props;

  return (
    <span className="amount">
      {isApproximate ? <span className="htxt">최대 </span> : ''}
      {limit}
      <span className="unit">원</span>
    </span>
  );
};

export default LinkItem;
