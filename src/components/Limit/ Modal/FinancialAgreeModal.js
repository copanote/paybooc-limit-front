import { useState, useEffect, useContext } from 'react';
import AgreeItem from './common/AgreeItem';
import ModalHeader from './common/ModalHeader';

import BodyScrollLock from '../../UI/modal/BodyScrollLock';
import Modal from '../../UI/modal/Modal';
import LimitContext from '../../../store/limit-context';

const FinancialAgreeModal = (props) => {
  const {
    state: { cashserviceLimitInfo, cardloanLimitInfo, isAgreedWithLimitRaiseNotice },
    action: { agreeOnCardloan, agreeOnCashService, agreeOnRaiseNotice },
  } = useContext(LimitContext);

  const [isCardloanChecked, setIsCardLoanChecked] = useState(true);
  const [isCashServiceChecked, setIsCashServiceChecked] = useState(true);
  const [isLimitNoticeAgreeChecked, setIsLimitNoticeAgreeChecked] = useState(true);
  const [isAllAgreeChecked, setIsAllAgreeChecked] = useState(true);

  const { lockScroll, unlockScroll } = BodyScrollLock();
  useEffect(() => {
    if (isAnyChecked()) {
      setIsAllAgreeChecked(true);
    } else if (!isAnyChecked()) {
      setIsAllAgreeChecked(false);
    }

    lockScroll();
    return () => {
      unlockScroll();
    };
  }, [lockScroll, unlockScroll, isCardloanChecked, isCashServiceChecked, isLimitNoticeAgreeChecked]);

  const isAllChekedBoxHandler = () => {
    if (isAllAgreeChecked) {
      setIsAllAgreeChecked(false);

      setIsCashServiceChecked(false);
      setIsCardLoanChecked(false);
      setIsLimitNoticeAgreeChecked(false);
    } else {
      setIsAllAgreeChecked(true);

      setIsCardLoanChecked(true);
      setIsCashServiceChecked(true);
      setIsLimitNoticeAgreeChecked(true);
    }
  };

  const cardLoanCheckBoxChangeHander = () => {
    setIsCardLoanChecked((prev) => {
      return !prev;
    });
  };

  const cashserviceCheckBoxChangeHander = () => {
    setIsCashServiceChecked((prev) => {
      return !prev;
    });
  };

  const limitNoticeAgreeCheckBoxChangeHander = () => {
    setIsLimitNoticeAgreeChecked((prev) => {
      return !prev;
    });
  };

  const isAnyChecked = () => {
    if ((!cashserviceLimitInfo.agreed && isCashServiceChecked) || (!cardloanLimitInfo.agreed && isCardloanChecked) || isAgreedWithLimitRaiseNotice) {
      return true;
    }
    return false;
  };

  const onFinancialAgreeBtnClickHandler = () => {
    if (!cashserviceLimitInfo.agreed && isCashServiceChecked) {
      agreeOnCashService();
    }

    if (!cardloanLimitInfo.agreed && isCardloanChecked) {
      agreeOnCardloan();
    }

    if (isAgreedWithLimitRaiseNotice) {
      agreeOnRaiseNotice();
    }
  };

  return (
    <Modal>
      <div className="lpop--wrap select-accept-terms default" style={{ display: 'block' }}>
        <div className="lpop-inner">
          <section className="select-lpop">
            <ModalHeader onModalClose={props.onModalClose} />

            <div className="lpop-cont">
              <h2 className="tit-20">
                바로카드 전용 금융상품 한도와
                <br />
                금리를 바로 확인 해 보세요!
              </h2>
              <h3 className="stit">
                약관 동의는 신용점수에 📊 <strong>영향을 주지 않아요.</strong>
              </h3>
              <div className="fn-chk-all">
                <input type="checkbox" className="re-chk-sb" id="agr-terms-all" checked={isAllAgreeChecked} onChange={isAllChekedBoxHandler} />
                <label for="agr-terms-all">모두 동의하기</label>
              </div>
              <div className="fn-chk-list">
                {!cardloanLimitInfo.agreed && <AgreeItem title={'장기카드대출(카드론) 이용동의'} termId={'11'} isChecked={isCardloanChecked} onCheckboxChangeHandler={cardLoanCheckBoxChangeHander} />}
                {!cashserviceLimitInfo.agreed && (
                  <AgreeItem title={'단기카드대출(현금서비스) 이용동의'} termId={'11'} isChecked={isCashServiceChecked} onCheckboxChangeHandler={cashserviceCheckBoxChangeHander} />
                )}
                {!isAgreedWithLimitRaiseNotice && (
                  <AgreeItem title={'이용한도 상향 안내 동의'} termId={'11'} isChecked={isLimitNoticeAgreeChecked} onCheckboxChangeHandler={limitNoticeAgreeCheckBoxChangeHander} />
                )}
              </div>
              <div className="btn-confirm-fn">
                <button disabled={!isAnyChecked()} onClick={onFinancialAgreeBtnClickHandler}>
                  확인
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Modal>
  );
};

export default FinancialAgreeModal;
