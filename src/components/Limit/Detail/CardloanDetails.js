import DetailItem from './DetailItem';

const CardloanDetails = (props) => {
  const { limit, rate } = props;

  return (
    <div className="limit-info">
      <div className="flex-bx">
        <p className="l-tit">장기카드대출 (카드론)</p>
        <p className="flex-bg-txt">최대 20만원 머니백</p>
      </div>
      <dl className="l-list">
        <DetailItem title={'최대한도'} amount={limit} />
        <DetailItem title={'연 최저금리'} amount={rate} unit={'%~'} />
      </dl>
      <button className="l-btn1">장기카드대출(카드론) 신청</button>
    </div>
  );
};

export default CardloanDetails;
