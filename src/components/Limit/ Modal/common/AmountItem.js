const AmountItem = (props) => {
  const { amount } = props;

  return (
    <>
      <div class="lap">
        <span class="value">{amount}</span>
        <span class="unit">만원</span>
      </div>
    </>
  );
};

export default AmountItem;
