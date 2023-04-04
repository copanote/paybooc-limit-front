import LimitRaiseButton from './Buttons/LimitRaiseButton';
import CardloanDetails from './Detail/CardloanDetails';
import CashServiceDetails from './Detail/CashServiceDetails';
import CreditLimitDetails from './Detail/CreditLimitDetails';
import LimitHead from './LimitHead';
import LinkEtc from './link/LinkEct';
import Links from './link/Links';
import FinancialAgreeModal from './modal/FinancialAgreeModal';
import LimitRaiseAgreeModal from './modal/LimitRaiseAgreeModal';
import LimitRaiseModal from './modal/LimitRaiseModal';
import LimitSummary from './Summary/LimitSummary';
import Switch from './Switch/Switch';

const Body = (props) => {
  return (
    <>
      <div className="my-vr01 manage-limit-area">
        <div className="sec --gray">
          <div class="total-limit-manage">
            <LimitHead />
            <LimitSummary />
            <LimitRaiseButton amount={'1,000'} />
            <Switch />
          </div>
        </div>

        <div className="sec">
          <div className="etc-limit-manage">
            <CreditLimitDetails limit={1000000} usage={1000} remain={9000} />
            <CashServiceDetails limit={1000000} usage={1000} remain={9000} />
            <CardloanDetails limit={1000000} rate={20.1} />
            <Links />
            <LinkEtc />
          </div>
        </div>
      </div>
      <LimitRaiseAgreeModal />
      <FinancialAgreeModal />
      <LimitRaiseModal />
    </>
  );
};

export default Body;
