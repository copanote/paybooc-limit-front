import { useContext, useState, useEffect } from 'react';
import LimitRaiseButton from '../components/Buttons/LimitRaiseButton';
import CardloanDetails from '../components/Limit/Detail/CardloanDetails';
import CashServiceDetails from '../components/Limit/Detail/CashServiceDetails';
import CreditLimitDetails from '../components/Limit/Detail/CreditLimitDetails';
import LimitHead from '../components/Limit/Header/LimitHead';
import LinkEtc from '../components/link/LinkEct';
import Links from '../components/link/Links';
import LimitSummary from '../components/Limit/Summary/LimitSummary';
import Switch from '../components/UI/Switch/Switch';

import LimitContext from '../store/limit-context';
import ModalContext from '../store/modal-context';

const LImitManagementBody = (props) => {
  const {
    state: { creditLimitInfo, cashserviceLimitInfo, cardloanLimitInfo, limitRaiseInfo, isAgreedWithLimitRaiseNotice },
    action: { disagreeOnRaiseNotice },
  } = useContext(LimitContext);

  const {
    action: { onLimitRaiseNoticeAgreeModalOpen },
  } = useContext(ModalContext);

  const onChangeSwitchState = () => {
    if (isAgreedWithLimitRaiseNotice) {
      disagreeOnRaiseNotice();
    } else {
      onLimitRaiseNoticeAgreeModalOpen();
    }
  };

  return (
    <>
      <div className="my-vr01 manage-limit-area">
        <div className="sec --gray">
          <div className="total-limit-manage">
            <LimitHead isRaisable={limitRaiseInfo.isRaisable} limit={creditLimitInfo.limit} dateOfInquiry={creditLimitInfo.dateOfInquiry} />
            <LimitSummary creditLimitInfo={creditLimitInfo} cashserviceLimitInfo={cashserviceLimitInfo} cardLoanInfo={cardloanLimitInfo} />
            {limitRaiseInfo.isRaisable && <LimitRaiseButton amount={limitRaiseInfo.availableCreditLimitAmount} />}
            <Switch isOn={isAgreedWithLimitRaiseNotice} onChangeSwitchState={onChangeSwitchState} onText={'한도상향 알림을 받고 있어요'} offText={'한도가 늘어나면 알림받기'} />
          </div>
        </div>

        <div className="sec">
          <div className="etc-limit-manage">
            <CreditLimitDetails limit={creditLimitInfo.limit} usage={creditLimitInfo.usage} remain={creditLimitInfo.remain} isRaisable={limitRaiseInfo.isRaisable} />
            <CashServiceDetails agreed={cashserviceLimitInfo.agreed} limit={cashserviceLimitInfo.limit} usage={cashserviceLimitInfo.usage} remain={cashserviceLimitInfo.remain} />
            <CardloanDetails agreed={cardloanLimitInfo.agreed} limit={cardloanLimitInfo.limit} rate={cardloanLimitInfo.rate} />
            <Links />
            <LinkEtc />
          </div>
        </div>
      </div>
    </>
  );
};

export default LImitManagementBody;
