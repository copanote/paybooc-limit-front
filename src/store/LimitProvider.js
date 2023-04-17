import { useEffect } from 'react';
import LimitContext from './limit-context';

const defaultState = {
  isAgreedWithLimitRaiseNotice: false,
  creditLimitInfo: {
    limit: '30000000',
    usage: '10000000',
    remain: '20000000',
    dateOfInquery: new Date().toLocaleDateString(),
  },
  cashserviceLimitInfo: {
    agreed: true,
    limit: '30000000',
    usage: '10000000',
    remain: '20000000',
  },
  cardloanLimitInfo: {
    agreed: true,
    limit: '30000000',
    rate: '11.1',
  },
  limitRaiseInfo: {
    isRaisable: true,
    availableCreditLimitAmount: '50000000',
    availableCashserviceAmount: '100000000',
  },
};

const LimitProvider = (props) => {
  useEffect(() => {}, []);
  const onAgreeWithCardloan = () => {};
  const onAgreeWithCashService = () => {};
  const onAgreeWithCreditLimitRaiseNotice = () => {};

  return <LimitContext.Provider value={defaultState}>{props.children}</LimitContext.Provider>;
};

export default LimitProvider;
