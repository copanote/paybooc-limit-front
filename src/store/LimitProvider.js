import { useEffect } from 'react';
import LimitContext from './limit-context';
import useHttp from '../hooks/use-http';

let defaultState = {
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
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    getCreditCashLimit();
    getCardloanLimit();
    getRaiseCreditLimitInfo();
  }, []);

  // const hasCreditLimitInfo = () => {};
  // const hasCardloanLimit = () => {};
  // const hasRaiseCreditLimitInfo = () => {};

  // const getCreditCashLimit = () => {

  //   const saveCreditLimitInfo = (data) => {
  //     defaultState.cardloanLimitInfo = data.creditLimit;
  //     defaultState.cashserviceLimitInfo = data.cashLimit;
  //   }

  //   sendRequest({ url: 'https://isrnd.bccard.com:34443/app/paybooc/CreditLimit.do?exec=authorize&clientId=PAYBOOC08' }, saveCreditLimitInfo);
  // }

  const getCreditCashLimit = () => {};
  const getCardloanLimit = () => {};
  const getRaiseCreditLimitInfo = () => {};

  const agreeOnCardloan = () => {};
  const agreeOnCashService = () => {};
  const agreeOnRaiseNotice = () => {};
  const disagreeOnRaiseNotice = () => {};
  const changeAgreeAtOnce = () => {};

  return (
    <LimitContext.Provider
      value={{ defaultState, getCreditCashLimit, getCardloanLimit, getRaiseCreditLimitInfo, agreeOnCardloan, agreeOnCashService, agreeOnRaiseNotice, disagreeOnRaiseNotice, changeAgreeAtOnce }}
    >
      {props.children}
    </LimitContext.Provider>
  );
};

export default LimitProvider;
