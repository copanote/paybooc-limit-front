import DetailItem from './DetailItem';

const CashServiceDetails = (props) => {
  const { agreed, limit, usage, remain } = props;

  return (
    <div className="limit-info">
      <p className="l-tit">단기카드대출 (현금서비스)</p>

      {agreed && (
        <>
          <dl className="l-list">
            <DetailItem title={'현재한도'} amount={limit} />
            <DetailItem title={'이용금액'} amount={usage} />
            <DetailItem title={'잔여이용한도'} amount={remain} />
          </dl>
          <button className="l-btn1">단기카드대출(현금서비스) 신청</button>
        </>
      )}

      {!agreed && (
        <>
          {' '}
          <dl className="l-list">
            <DetailItem title={'현재한도'} amount={'0'} />
            <p className="l-ps no-i">단기카드대출 이용에 동의하지 않는 경우, 한도가 '0'으로 표기됩니다</p>
          </dl>
          <button className="l-btn2">내 한도는 얼마?</button>
        </>
      )}
    </div>
  );
};

export default CashServiceDetails;
