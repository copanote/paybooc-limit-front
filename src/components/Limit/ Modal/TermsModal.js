import { useEffect, useState } from 'react';
import Modal from '../../UI/modal/Modal';
import BodyScrollLock from '../../UI/modal/BodyScrollLock';

const TermsModal = (props) => {
  const { contents } = props;
  const { lockScroll, unlockScroll } = BodyScrollLock();

  useEffect(() => {
    lockScroll();
    return () => {
      unlockScroll();
    };
  }, [lockScroll, unlockScroll]);

  return (
    <Modal>
      <div className="lpop--wrap select-terms-view top-type" style={{ display: 'block' }}>
        <div className="lpop-inner">
          <section className="select-lpop">
            <div className="lpop-cont">
              <div className="push-terms-cont"></div>
              {contents}
            </div>
          </section>
          <div className="btn-confirm-fn" onClick={props.onModalClose}>
            <button>확인</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TermsModal;
