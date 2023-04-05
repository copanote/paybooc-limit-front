const LimitRaiseButton = (props) => {
  const { amount } = props;

  const onButtonClickHandler = () => {
    props.onChangeLimitRaiseModalState(true);
  };

  return (
    <div className="total-limit-bnr">
      <p className="txt">
        <strong>
          <em>{amount}</em>만원
        </strong>{' '}
        까지
        <br />
        한도를 바로 늘려보세요!
      </p>
      <button className="btn" onClick={onButtonClickHandler}>
        바로 늘리기
      </button>
    </div>
  );
};

export default LimitRaiseButton;
