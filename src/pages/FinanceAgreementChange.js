import Header from '../components/Header';
import TermsModal from '../components/modal/TermsModal';
import FinanceChangeBody from './FinanceChangeBody';

const FinanceAgreementChange = () => {
  return (
    <>
      <Header title={'금융서비스 이용동의 변경'} />
      <FinanceChangeBody />
      {/* <TermsModal title={'장기카드대출(카드론) 이용동의'} contents={'니ㅏㅇ렁니ㅓㄹ'} /> */}
    </>
  );
};

export default FinanceAgreementChange;
