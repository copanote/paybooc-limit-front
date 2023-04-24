import { useState, useContext, useEffect } from 'react';
import '../limit.css';
import Header from '../layout/Header';
import LImitManagementBody from '../layout/LImitManagementBody';
import LimitRaiseModal from '../components/Limit/ Modal/LimitRaiseModal';
import FinancialAgreeModal from '../components/Limit/ Modal/FinancialAgreeModal';
import TermsModal from '../components/Limit/ Modal/TermsModal';
import LimitRaiseNoticeAgreeModal from '../components/Limit/ Modal/LimitRaiseNoticeAgreeModal';

function LimitManagement() {
  const [limitRaiseModalIsShown, setLimitRaiseModalIsShown] = useState(false);
  const [finalcialAgreeModalIsShown, setFinancialAgreeModalIsShown] = useState(false);
  const [termsModalIsShown, setTermsModalIsShown] = useState(false);
  const [limitRaiseNoticeAgreeModalIsShown, setLimitRaiseNoticeAgreeModalIsShown] = useState(false);
  const onLimitRaiseModalCloseHandler = () => {
    setLimitRaiseModalIsShown(false);
  };
  const onFinancialAgreeModalCloseHandler = () => {
    setFinancialAgreeModalIsShown(false);
  };
  const onTermsModalCloseHandler = () => {
    setTermsModalIsShown(false);
  };
  const onLimitRaiseNoticeAgreeModalCloseHandler = () => {
    setLimitRaiseNoticeAgreeModalIsShown(false);
  };

  return (
    <>
      <Header title={'이용한도관리'} />
      <LImitManagementBody />
      {limitRaiseModalIsShown && <LimitRaiseModal onModalClose={onLimitRaiseModalCloseHandler} />}
      {finalcialAgreeModalIsShown && <FinancialAgreeModal onModalClose={onFinancialAgreeModalCloseHandler} />}
      {termsModalIsShown && <TermsModal onModalClose={onTermsModalCloseHandler} />}
      {limitRaiseNoticeAgreeModalIsShown && <LimitRaiseNoticeAgreeModal onModalClose={onLimitRaiseNoticeAgreeModalCloseHandler} />}
    </>
  );
}

export default LimitManagement;
