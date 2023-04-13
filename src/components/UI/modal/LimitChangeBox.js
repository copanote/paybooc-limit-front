import AmountItem from './AmountItem';

const LimitChangeBox = (props) => {
  const { title, prevAmount, afterAmount } = props;

  return (
    <>
      <div className="limit-item">
        <div className="title-wrap">
          <p className="title">{title}</p>
        </div>
        <div className="form-limit">
          <div className="limit-ipt">
            <div className="before">
              <span className="tt">변경전</span>
              <AmountItem amount={prevAmount} />
            </div>
            <div className="after">
              <span className="tt">변경후</span>
              <AmountItem amount={afterAmount} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LimitChangeBox;
