import React from 'react';

const LimitContext = React.createContext({
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
});

export default LimitContext;
