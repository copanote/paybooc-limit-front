import DetailItem from './DetailItem';

const CashServiceDetails = (props) => {
  const { limit, usage, remain } = props;

  return (
    <div className="limit-info">
      <p className="l-tit">단기카드대출 (현금서비스)</p>
      <dl className="l-list">
        <DetailItem title={'현재한도'} amount={limit} />
        <DetailItem title={'이용금액'} amount={usage} />
        <DetailItem title={'잔여이용한도'} amount={remain} isRemain={true} />
      </dl>
      <button className="l-btn1">단기카드대출(현금서비스) 신청</button>
    </div>
  );
};

export default CashServiceDetails;
