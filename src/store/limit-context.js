import React from 'react';

const LimitContext = React.createContext({
  state: {
    isAgreedWithLimitRaiseNotice: false,
    creditLimitInfo: {
      limit: 0,
      usage: 0,
      remain: 0,
      dateOfInquery: new Date().toLocaleDateString(),
    },
    cashserviceLimitInfo: {
      agreed: true,
      limit: 0,
      usage: 0,
      remain: 0,
    },
    cardloanLimitInfo: {
      agreed: true,
      limit: 0,
      rate: '0',
    },
    limitRaiseInfo: {
      isRaisable: true,
      availableCreditLimitAmount: 0,
      availableCashserviceAmount: 0,
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
});

export default LimitContext;
