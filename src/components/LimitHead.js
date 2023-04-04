import Guide from './Guide';

const LimitHead = (props) => {
  const { dateOfInquery, limit, isRaisable } = props;

  return (
    <div class="total-limit-box">
      <div class="title-wrap">
        <p class="title">총 이용한도</p>
        <p class="date">{dateOfInquery} 기준</p>
      </div>
      <p class="text-amount">
        <strong>{limit}</strong>
        <span class="unit">원</span>
      </p>

      {isRaisable ? (
        ''
      ) : (
        <mark class="text-badge">
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
