import { useEffect, useState } from 'react';
import LimitContext from './limit-context';
import useHttp from '../hooks/use-http';

const initailState = {
  state: {
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
  },
  action: {
    onRequestInitData: () => {},
    getCreditCashLimit: () => {},
    getCardloanLimit: () => {},
    getRaiseCreditLimitInfo: () => {},
    agreeOnCardloan: () => {},
    agreeOnCashService: () => {},
    agreeOnRaiseNotice: () => {},
    disagreeOnRaiseNotice: () => {},
    changeAgreeAtOnce: () => {},
  },
};

const LimitReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CREDITLIMIT':
      return {
        ...state,
      };
  }
};

const LimitProvider = (props) => {
  const [isAgreedWithLimitRaiseNotice, setIsAgreedWithLimitRaiseNotice] = useState(false);
  const [creditLimitInfo, setCreditLimitInfo] = useState({
    limit: '30000000',
    usage: '10000000',
    remain: '20000000',
    dateOfInquery: new Date().toLocaleDateString(),
  });

  const [cashserviceLimitInfo, setCashserviceLimitInfo] = useState({
    agreed: true,
    limit: '30000000',
    usage: '10000000',
    remain: '20000000',
  });

  const [cardloanLimitInfo, setCardloanLimitInfo] = useState({
    agreed: true,
    limit: '30000000',
    rate: '11.1',
  });

  const [limitRaiseInfo, setLimitRaiseInfo] = useState({
    isRaisable: true,
    availableCreditLimitAmount: '50000000',
    availableCashserviceAmount: '100000000',
  });

  const { isLoading, error, sendRequest } = useHttp();

  const onRequestInitData = () => {
    setCreditLimitInfo((prev) => {
      return {
        limit: '90000000',
        usage: '90000000',
        remain: '90000000',
        dateOfInquery: new Date().toLocaleDateString(),
      };
    });

    setCashserviceLimitInfo((prev) => {
      return {
        agreed: true,
        limit: '40000000',
        usage: '40000000',
        remain: '40000000',
      };
    });

    setCardloanLimitInfo((prev) => {
      return {
        agreed: true,
        limit: '70000000',
        rate: '22.2',
      };
    });

    setIsAgreedWithLimitRaiseNotice(true);
  };

  const getCreditCashLimit = () => {};
  const getCardloanLimit = () => {};
  const getRaiseCreditLimitInfo = () => {};

  const agreeOnCardloan = () => {};
  const agreeOnCashService = () => {};

  const agreeOnRaiseNotice = () => {
    console.log('agreeOnRaiseNotice');
    setIsAgreedWithLimitRaiseNotice(true);
  };
  const disagreeOnRaiseNotice = () => {
    setIsAgreedWithLimitRaiseNotice(false);
  };

  const changeAgreeAtOnce = () => {};

  return (
    <LimitContext.Provider
      value={{
        state: {
          isAgreedWithLimitRaiseNotice: isAgreedWithLimitRaiseNotice,
          creditLimitInfo: creditLimitInfo,
          cashserviceLimitInfo: cashserviceLimitInfo,
          cardloanLimitInfo: cardloanLimitInfo,
          limitRaiseInfo: limitRaiseInfo,
        },
        action: {
          onRequestInitData: onRequestInitData,
          getCreditCashLimit: () => {},
          getCardloanLimit: () => {},
          getRaiseCreditLimitInfo: () => {},
          agreeOnCardloan: () => {},
          agreeOnCashService: () => {},
          agreeOnRaiseNotice: agreeOnRaiseNotice,
          disagreeOnRaiseNotice: disagreeOnRaiseNotice,
          changeAgreeAtOnce: () => {},
        },
      }}
    >
      {props.children}
    </LimitContext.Provider>
  );
};

export default LimitProvider;
