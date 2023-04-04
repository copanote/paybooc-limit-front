import { useState } from 'react';
import ModalMask from './ModalMask';

const TermsModal = (props) => {
  const [isVisible, setVisible] = useState(true);
  const { contents } = props;

  const onModalClose = () => {
    setVisible(false);
  };

  return (
    <>
      <ModalMask isVisible={isVisible} />
      <div className="lpop--wrap select-terms-view top-type" style={isVisible ? { display: 'block' } : { display: 'none' }}>
        <div className="lpop-inner">
          <section className="select-lpop">
            <div className="lpop-cont">
              <div className="push-terms-cont"></div>
              {contents}
            </div>
          </section>
          <div className="btn-confirm-fn" onClick={onModalClose}>
            <button>확인</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsModal;
