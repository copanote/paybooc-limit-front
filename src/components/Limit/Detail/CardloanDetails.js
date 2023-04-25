import DetailItem from './DetailItem';

const CardloanDetails = (props) => {
  const { agreed, limit, rate } = props;

  return (
    <div className="limit-info">
      <div className="flex-bx">
        <p className="l-tit">장기카드대출 (카드론)</p>
        <p className="flex-bg-txt">최대 20만원 머니백</p>
      </div>
      {agreed && limit == !0 && (
        <>
          <dl className="l-list">
            <DetailItem title={'최대한도'} amount={limit} />
            <DetailItem title={'연 최저금리'} amount={rate} unit={'%~'} />
          </dl>
          <button className="l-btn1">장기카드대출(카드론) 신청</button>
        </>
      )}

      {agreed && limit == 0 && (
        <>
          <dl className="l-list">
            <DetailItem title={'최대한도'} amount={'0'} />
            <p className="l-ps no-i">카드 발급 3개월 미만, 카드생태, 연체 및 신용점수 등의 사유에 의해 한도가 부여되지 않을 수 있습니다.</p>
          </dl>
          <button className="l-btn1">장기카드대출(카드론) 신청</button>
        </>
      )}

      {!agreed && (
        <>
          <dl className="l-list">
            <DetailItem title={'현재한도'} amount={'0'} />
            <p className="l-ps no-i">장기카드대출 이용에 동의하지 않는 경우, 한도가 '0'으로 표기됩니다</p>
          </dl>
          <button className="l-btn2">내 한도는 얼마?</button>
        </>
      )}
    </div>
  );
};

export default CardloanDetails;
