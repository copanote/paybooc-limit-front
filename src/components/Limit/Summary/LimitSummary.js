import { useContext } from 'react';
import LimitSummaryItem from './LimitSummaryItem';
import LimitContext from '../../../store/limit-context';

const LimitSummary = () => {
  const {
    state: { creditLimitInfo, cashserviceLimitInfo, cardloanLimitInfo },
  } = useContext(LimitContext);

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
        {cashserviceLimitInfo.agreed && <LimitSummaryItem limit={cashserviceLimitInfo.limit} isApproximate={false} />}
        {!cashserviceLimitInfo.agreed && <button class="btn-limit">한도보기</button>}
      </li>
      <li>
        <div>장기카드대출(카드론)</div>
        {cardloanLimitInfo.agreed && <LimitSummaryItem limit={cardloanLimitInfo.limit} isApproximate={true} />}
        {!cardloanLimitInfo.agreed && <button class="btn-limit">한도보기</button>}
      </li>
    </ul>
  );
};

export default LimitSummary;
