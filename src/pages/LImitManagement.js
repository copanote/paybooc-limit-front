import { useState, useContext, useEffect } from 'react';
import '../limit.css';
import Header from '../layout/Header';
import LImitManagementBody from '../layout/LImitManagementBody';
import LimitRaiseModal from '../components/Limit/ Modal/LimitRaiseModal';
import FinancialAgreeModal from '../components/Limit/ Modal/FinancialAgreeModal';
import TermsModal from '../components/Limit/ Modal/TermsModal';
import LimitRaiseNoticeAgreeModal from '../components/Limit/ Modal/LimitRaiseNoticeAgreeModal';
import ModalContext from '../store/modal-context';
import LimitContext from '../store/limit-context';

function LimitManagement() {
  const {
    state: { limitRaiseModalIsShown, finalcialAgreeModalIsShown, termsModalIsShown, limitRaiseNoticeAgreeModalIsShown },
    action: { onLimitRaiseModalClose, onFinancialAgreeModalClose, onTermsModalClose, onLimitRaiseNoticeAgreeModalOpen, onLimitRaiseNoticeAgreeModalClose },
  } = useContext(ModalContext);

  const {
    state: { isAgreedWithLimitRaiseNotice },
  } = useContext(LimitContext);

  useEffect(() => {
    if (!isAgreedWithLimitRaiseNotice) {
      onLimitRaiseNoticeAgreeModalOpen();
    }
  }, []);

  return (
    <>
      <Header title={'이용한도관리'} />
      <LImitManagementBody />
      {limitRaiseModalIsShown && <LimitRaiseModal onModalClose={onLimitRaiseModalClose} />}
      {finalcialAgreeModalIsShown && <FinancialAgreeModal onModalClose={onFinancialAgreeModalClose} />}
      {termsModalIsShown && <TermsModal onModalClose={onTermsModalClose} />}
      {limitRaiseNoticeAgreeModalIsShown && <LimitRaiseNoticeAgreeModal onModalClose={onLimitRaiseNoticeAgreeModalClose} />}
    </>
  );
}

export default LimitManagement;
