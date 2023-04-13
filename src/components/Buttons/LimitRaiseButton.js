const LimitRaiseButton = (props) => {
  const unit = 10000;

  const amt = Number(props.amount) / unit;

  return (
    <div className="total-limit-bnr">
      <p className="txt">
        <strong>
          <em>{amt.toLocaleString()}</em>만원
        </strong>
        까지
        <br />
        한도를 바로 늘려보세요!
      </p>
      <button className="btn" onClick={props.onClick}>
        바로 늘리기
      </button>
    </div>
  );
};

export default LimitRaiseButton;
