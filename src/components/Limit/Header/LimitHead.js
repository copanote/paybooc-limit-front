import Guide from './Guide';

const LimitHead = (props) => {
  const { dateOfInquiry, limit, isRaisable } = props;

  return (
    <div className="total-limit-box">
      <div className="title-wrap">
        <p className="title">총 이용한도</p>
        <p className="date">{dateOfInquiry} 기준</p>
      </div>
      <p className="text-amount">
        <strong>{limit}</strong>
        <span className="unit">원</span>
      </p>

      {!isRaisable && (
        <mark className="text-badge">
          <strong>최대한도로 이용중</strong>
        </mark>
      )}
      <Guide />
    </div>
  );
};

LimitHead.defaultProps = {
  date: '2023.04.04',
  limitAmount: '6,000,000',
  isRaisable: false,
};

export default LimitHead;
