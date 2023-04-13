import { createContext, useEffect, useState } from 'react';

const limitContext = {
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
    isAvailable: true,
    availableCreditLimitAmount: '50000000',
    availableCashserviceAmount: '100000000',
  },
};

const LimitContextProvider = ({ children }) => {
  useEffect(() => {
    console.log('in VnContext');
  }, []);
  return <LimitContext.Provider value={limitContext}> {children} </LimitContext.Provider>;
};

const LimitContext = createContext(limitContext);
export default LimitContext;
export { LimitContextProvider };
