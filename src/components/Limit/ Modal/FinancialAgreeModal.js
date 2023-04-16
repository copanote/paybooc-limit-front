import { useState, useEffect } from 'react';
import AgreeItem from './common/AgreeItem';
import ModalHeader from './common/ModalHeader';

import BodyScrollLock from '../../UI/modal/BodyScrollLock';
import Modal from '../../UI/modal/Modal';

const FinancialAgreeModal = (props) => {
  const [isVisible, setVisible] = useState(true);
  const [isAgree, setAgree] = useState(false);

  const onAgreeCheckBoxChecked = () => {
    if (isAgree) {
      setAgree(false);
    } else {
      setAgree(true);
    }
  };

  const { lockScroll, unlockScroll } = BodyScrollLock();

  useEffect(() => {
    lockScroll();
    return () => {
      unlockScroll();
    };
  }, [lockScroll, unlockScroll]);

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
                <input type="checkbox" className="re-chk-sb" id="agr-terms-all" name="" />
                <label for="agr-terms-all">모두 동의하기</label>
              </div>
              <div className="fn-chk-list">
                <AgreeItem title={'장기카드대출(카드론) 이용동의'} />
                <AgreeItem title={'단기카드대출(현금서비스) 이용동의'} />
                <AgreeItem title={'이용한도 상향 안내 동의'} />
              </div>
              <div className="btn-confirm-fn">
                <button disabled id="fnCheckFinal">
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
