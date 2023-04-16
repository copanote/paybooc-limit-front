import ModalHeader from './common/ModalHeader';
import Modal from '../../UI/modal/Modal';
import BodyScrollLock from '../../UI/modal/BodyScrollLock';
import { useEffect } from 'react';

const LimitRaiseNoticeAgreeModal = (props) => {
  const { lockScroll, unlockScroll } = BodyScrollLock();

  useEffect(() => {
    lockScroll();
    return () => {
      unlockScroll();
    };
  }, [lockScroll, unlockScroll]);

  return (
    <Modal>
      <div className="lpop--wrap lpop-alramAgreeGuide" style={{ display: 'block' }}>
        <div className="lpop-inner">
          <section className="select-lpop">
            <ModalHeader onModalClose={props.onModalClose} />
            <div className="lpop-cont">
              <div className="limit-alram-box">
                <div className="alram-guide">
                  <p className="tt">한도 상향 알림을 받아보세요!</p>
                  <p className="tx">
                    바로카드의 이용한도가 늘어난 경우,
                    <br />
                    빠르게 안내해 드려요
                  </p>
                </div>
                <div className="form-select-box">
                  <div className="form-check">
                    <input type="checkbox" name="agree" value="agree" id="agree" onClick={props.onAgreeCheckBoxChecked} />
                    <label for="agree">한도 상향이 가능한 경우 TM, LMS, 카카오톡, 이메일등을 통한 한도 상향 안내에 동의합니다.</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="lpop-foot">
              <button className="btn--submit full" disabled={props.isAgree ? false : true}>
                <span>한도 상향 알림 받기</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </Modal>
  );
};

export default LimitRaiseNoticeAgreeModal;
