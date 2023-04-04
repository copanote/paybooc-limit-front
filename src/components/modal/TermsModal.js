import { useState } from 'react';

const TermsModal = (props) => {
  const [isVisible, setVisible] = useState(true);
  const { title, contents } = props;

  const onModalClose = () => {
    setVisible(false);
  };

  return (
    <div className="lpop--wrap select-terms-view top-type" style={isVisible ? { display: 'block' } : { display: 'none' }}>
      <div className="lpop-inner">
        <section className="select-lpop">
          <div className="lpop-cont">
            <div className="push-terms-cont">{title}</div>
            {contents}
          </div>
        </section>
        <div className="btn-confirm-fn" onClick={onModalClose}>
          <button>확인</button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
