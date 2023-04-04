import { useContext, useState } from 'react';
import LimitRaiseButton from '../components/Buttons/LimitRaiseButton';
import CardloanDetails from '../components/Detail/CardloanDetails';
import CashServiceDetails from '../components/Detail/CashServiceDetails';
import CreditLimitDetails from '../components/Detail/CreditLimitDetails';
import LimitHead from '../components/LimitHead';
import LinkEtc from '../components/link/LinkEct';
import Links from '../components/link/Links';
import FinancialAgreeModal from '../components/modal/FinancialAgreeModal';
import LimitRaiseAgreeModal from '../components/modal/LimitRaiseAgreeModal';
import LimitRaiseModal from '../components/modal/LimitRaiseModal';
import TermsModal from '../components/modal/TermsModal';
import LimitSummary from '../components/Summary/LimitSummary';
import Switch from '../components/Switch/Switch';

import LimitContext from '../context/LimitContext';

const LImitManagementBody = (props) => {
  const { creditLimitInfo, cashserviceLimitInfo, cardloanLimitInfo, limitRaiseInfo } = useContext(LimitContext);
  const [isLimitRaiseAgreeModalOpen, setLimitRaiseAgreeModalOpen] = useState(false);
  const [isFinancialAgreeModalOpen, setFinancialAgreeModalOpen] = useState(false);
  const [isLimitRaiseModalOpen, setLimitRaiseModalOpen] = useState(false);
  const [isTermsModalOpen, setTermsModalOpen] = useState(false);

  return (
    <>
      <div className="my-vr01 manage-limit-area">
        <div className="sec --gray">
          <div class="total-limit-manage">
            <LimitHead isRaisable={limitRaiseInfo.isAvailable} limit={creditLimitInfo.limit} dateOfInquery={creditLimitInfo.dateOfInquery} />
            <LimitSummary />
            <LimitRaiseButton amount={'1,000'} />
            <Switch />
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
      {isFinancialAgreeModalOpen ? <FinancialAgreeModal /> : ''}
      {isLimitRaiseModalOpen ? <LimitRaiseModal /> : ''}
      {isTermsModalOpen ? <TermsModal contents={'adfs'} /> : ''}
      {isLimitRaiseAgreeModalOpen ? <LimitRaiseAgreeModal /> : ''}
    </>
  );
};

export default LImitManagementBody;
