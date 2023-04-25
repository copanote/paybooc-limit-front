import DetailItem from './DetailItem';

const LimitDetails = (props) => {
  const { limit, usage, remain, isRaisable } = props;

  return (
    <div className="limit-info">
      <p className="l-tit">일시불·할부</p>
      <dl className="l-list">
        <DetailItem title={'현재한도'} amount={limit} />
        <DetailItem title={'이용금액'} amount={usage} />
        <DetailItem title={'잔여이용한도'} amount={remain} isRemain={true} />
      </dl>
      {isRaisable && <button className="l-btn1">이용한도 변경</button>}
    </div>
  );
};

export default LimitDetails;
