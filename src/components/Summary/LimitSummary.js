import LimitSummaryItem from './LimitSummaryItem';

const LimitSummary = (props) => {
  const { creditLimitInfo, cashServiceInfo, cardLoanInfo } = props;

  return (
    <ul className="total-limit-summery">
      <li>
        <div>일시불·할부</div>
        <div>
          <LimitSummaryItem limit={creditLimitInfo.limit} isApproximate={false} />
        </div>
      </li>
      <li>
        <div>단기카드대출(현금서비스)</div>
        {cashServiceInfo.agree ? <LimitSummaryItem limit={cashServiceInfo.limit} isApproximate={false} /> : <button class="btn-limit">한도보기</button>}
      </li>
      <li>
        <div>장기카드대출(카드론)</div>
        {cardLoanInfo.agree ? <LimitSummaryItem limit={cardLoanInfo.limit} isApproximate={true} /> : <button class="btn-limit">한도보기</button>}
      </li>
    </ul>
  );
};

LimitSummary.defaultProps = {
  creditLimitInfo: { limit: '6000000' },
  cashServiceInfo: { agree: true, limit: '1000000' },
  cardLoanInfo: { agree: true, limit: '30000000' },
};

export default LimitSummary;
