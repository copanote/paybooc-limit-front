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

const LImitManagementBody = (props) => {
  const { creditLimitInfo, cashserviceLimitInfo, cardloanLimitInfo, limitRaiseInfo } = useContext(LimitContext);
  const [isSwitchOn, setSwitchOn] = useState(false);

  const onChangeSwitchState = () => {
    setSwitchOn((isSwitchOn) => !isSwitchOn);
    // toastPopupAlert('한도상향 알림이 해지되었습니다.');
  };

  return (
    <>
      <div className="my-vr01 manage-limit-area">
        <div className="sec --gray">
          <div className="total-limit-manage">
            <LimitHead isRaisable={limitRaiseInfo.isAvailable} limit={creditLimitInfo.limit} dateOfInquery={creditLimitInfo.dateOfInquery} />
            <LimitSummary />
            <LimitRaiseButton amount={'50000000'} />
            <Switch isOn={isSwitchOn} onChangeSwitchState={onChangeSwitchState} onText={'한도상향 알림을 받고 있어요'} offText={'한도가 늘어나면 알림받기'} />
          </div>
        </div>

        <div className="sec">
          <div className="etc-limit-manage">
            <CreditLimitDetails limit={creditLimitInfo.limit} usage={creditLimitInfo.usage} remain={creditLimitInfo.remain} />
            <CashServiceDetails limit={cashserviceLimitInfo.limit} usage={cashserviceLimitInfo.usage} remain={cashserviceLimitInfo.remain} />
            <CardloanDetails limit={cardloanLimitInfo.limit} rate={cardloanLimitInfo.rate} />
            <Links />
            <LinkEtc />
          </div>
        </div>
      </div>
    </>
  );
};

export default LImitManagementBody;
