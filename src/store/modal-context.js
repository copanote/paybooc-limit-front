import React, { useState } from 'react';

const ModalContext = React.createContext({
  state: {
    limitRaiseModalIsShown: false,
    finalcialAgreeModalIsShown: false,
    termsModalIsShown: false,
    limitRaiseNoticeAgreeModalIsShown: false,
  },
  action: {
    onLimitRaiseModalOpen: () => {},
    onLimitRaiseModalClose: () => {},

    onFinancialAgreeModalOpen: () => {},
    onFinancialAgreeModalClose: () => {},

    onTermsModalOpen: () => {},
    onTermsModalClose: () => {},

    onLimitRaiseNoticeAgreeModalOpen: () => {},
    onLimitRaiseNoticeAgreeModalClose: () => {},
  },
});

export default ModalContext;

export const ModalContextProvider = (props) => {
  const [limitRaiseModalIsShown, setLimitRaiseModalIsShown] = useState(false);
  const [finalcialAgreeModalIsShown, setFinancialAgreeModalIsShown] = useState(false);
  const [termsModalIsShown, setTermsModalIsShown] = useState(false);
  const [limitRaiseNoticeAgreeModalIsShown, setLimitRaiseNoticeAgreeModalIsShown] = useState(false);

  const onLimitRaiseModalOpen = () => {
    setLimitRaiseModalIsShown(true);
  };
  const onLimitRaiseModalClose = () => {
    setLimitRaiseModalIsShown(false);
  };

  const onFinancialAgreeModalOpen = () => {
    setFinancialAgreeModalIsShown(true);
  };
  const onFinancialAgreeModalClose = () => {
    setFinancialAgreeModalIsShown(false);
  };

  const onTermsModalOpen = () => {
    setTermsModalIsShown(true);
  };
  const onTermsModalClose = () => {
    setTermsModalIsShown(false);
  };

  const onLimitRaiseNoticeAgreeModalOpen = () => {
    console.log('aa');
    setLimitRaiseNoticeAgreeModalIsShown(true);
  };
  const onLimitRaiseNoticeAgreeModalClose = () => {
    setLimitRaiseNoticeAgreeModalIsShown(false);
  };

  return (
    <ModalContext.Provider
      value={{
        state: {
          limitRaiseModalIsShown: limitRaiseModalIsShown,
          finalcialAgreeModalIsShown: finalcialAgreeModalIsShown,
          termsModalIsShown: termsModalIsShown,
          limitRaiseNoticeAgreeModalIsShown: limitRaiseNoticeAgreeModalIsShown,
        },
        action: {
          onLimitRaiseModalOpen: onLimitRaiseModalOpen,
          onLimitRaiseModalClose: onLimitRaiseModalClose,

          onFinancialAgreeModalOpen: onFinancialAgreeModalOpen,
          onFinancialAgreeModalClose: onFinancialAgreeModalClose,

          onTermsModalOpen: onTermsModalOpen,
          onTermsModalClose: onTermsModalClose,

          onLimitRaiseNoticeAgreeModalOpen: onLimitRaiseNoticeAgreeModalOpen,
          onLimitRaiseNoticeAgreeModalClose: onLimitRaiseNoticeAgreeModalClose,
        },
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
