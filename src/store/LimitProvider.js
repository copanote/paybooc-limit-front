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
    limit: '',
    usage: '',
    remain: '',
    dateOfInquery: new Date().toLocaleDateString(),
  });

  const [cashserviceLimitInfo, setCashserviceLimitInfo] = useState({
    agreed: true,
    limit: '',
    usage: '',
    remain: '',
  });

  const [cardloanLimitInfo, setCardloanLimitInfo] = useState({
    agreed: true,
    limit: '',
    rate: '',
  });

  const [limitRaiseInfo, setLimitRaiseInfo] = useState({
    isRaisable: true,
    availableCreditLimitAmount: '',
    availableCashserviceAmount: '',
  });

  const { isLoading, error, sendRequest: fetchCreditCashLimit } = useHttp();
  const { sendRequest: fetchCardloanLimit } = useHttp();
  const { sendRequest: fetchRaiseCreditLimitInfo } = useHttp();

  useEffect(() => {
    console.log('LImitManagementBody UseEffect');
    onRequestInitData();
  }, []);

  const onRequestInitData = () => {
    console.log('onRequestInitData');
    const fetchCreditCashLimitTask = (data) => {
      setCreditLimitInfo((prev) => {
        return {
          limit: data.creditLimit.limit,
          usage: data.creditLimit.usage,
          remain: data.creditLimit.remain,
          dateOfInquery: data.creditLimit.dateOfInquery,
        };
      });
      setCashserviceLimitInfo(() => {
        return {
          agreed: data.cashLimit.agreed,
          limit: data.cashLimit.limit,
          usage: data.cashLimit.usage,
          remain: data.cashLimit.remain,
        };
      });
    };

    fetchCreditCashLimit(
      {
        url: '/app/paybooc/CreditLimit.do?exec=getCreditCashLimit',
        method: 'GET',
        headers: {
          Authorization: 'Bearer UEFZQk9PQzA3',
          Accept: '*/*',
        },
      },
      fetchCreditCashLimitTask
    );

    const fetchCardloanLimitTask = (data) => {
      setCardloanLimitInfo((prev) => {
        return {
          agreed: data.agreed,
          limit: data.limit,
          rate: data.ratio,
        };
      });
    };

    fetchCardloanLimit(
      {
        url: '/app/paybooc/CreditLimit.do?exec=getCardloanLimit',
        method: 'GET',
        headers: {
          Authorization: 'Bearer UEFZQk9PQzA3',
          Accept: '*/*',
        },
      },
      fetchCardloanLimitTask
    );

    const fetchRaiseCreditLimitInfoTask = (data) => {
      setLimitRaiseInfo((prev) => {
        return {
          isRaisable: data.isAvailable,
          availableCreditLimitAmount: data.availableTotalLimit,
          availableCashserviceAmount: data.availableCashService,
        };
      });
    };

    fetchRaiseCreditLimitInfo(
      {
        url: '/app/paybooc/CreditLimit.do?exec=getRaiseCreditLimitInfo',
        method: 'GET',
        headers: {
          Authorization: 'Bearer UEFZQk9PQzA3',
          Accept: '*/*',
        },
      },
      fetchRaiseCreditLimitInfoTask
    );

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
