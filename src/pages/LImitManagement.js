import { useState } from 'react';
import Header from '../layout/Header';
import '../limit.css';
import LImitManagementBody from '../layout/LImitManagementBody';
import LimitProvider from '../store/LimitProvider';
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
    <LimitProvider>
      <Header title={'이용한도관리'} />
      <LImitManagementBody />
      {limitRaiseModalIsShown && <LimitRaiseModal onModalClose={onLimitRaiseModalCloseHandler} />}
      {finalcialAgreeModalIsShown && <FinancialAgreeModal onModalClose={onFinancialAgreeModalCloseHandler} />}
      {termsModalIsShown && <TermsModal onModalClose={onTermsModalCloseHandler} />}
      {limitRaiseNoticeAgreeModalIsShown && <LimitRaiseNoticeAgreeModal onModalClose={onLimitRaiseNoticeAgreeModalCloseHandler} />}
    </LimitProvider>
  );
}

export default LimitManagement;
