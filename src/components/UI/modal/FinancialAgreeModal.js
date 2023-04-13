import { useState } from 'react';
import AgreeItem from './AgreeItem';
import ModalHeader from './ModalHeader';
import ModalMask from './ModalMask';

import BodyScrollLock from './BodyScrollLock';

const FinancialAgreeModal = (props) => {
  const [isVisible, setVisible] = useState(true);
  const [isAgree, setAgree] = useState(false);
  const { lockScroll, unlockScroll } = BodyScrollLock();

  const onModalClose = () => {
    setVisible(false);
    unlockScroll();
  };

  const onAgreeCheckBoxChecked = () => {
    if (isAgree) {
      setAgree(false);
    } else {
      setAgree(true);
    }
  };

  return (
    <>
      <ModalMask isVisible={isVisible} />
      <div className="lpop--wrap select-accept-terms default" style={isVisible ? { display: 'block' } : { display: 'none' }}>
        <div className="lpop-inner">
          <section className="select-lpop">
            <ModalHeader onModalClose={onModalClose} />

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
    </>
  );
};

export default FinancialAgreeModal;

/**
 * 
 
// layer popup open
function fnOpenLayer(layer){
	var $mask = $('.lpop-mask'),
		$lpop_wrap = $(layer),   
		$lpop_cont = $(layer + ' .lpop-cont')  
	$('body').addClass('stop-scroll');
	$mask.show();
	$lpop_wrap.show();	
	$lpop_wrap.find('.lpop-cont').css('max-height', function(){
		var contHeight = $(window).height() - 52;
		$(layer + ' .lpop-header') ? contHeight = contHeight - $(layer + ' .lpop-header').outerHeight() : contHeight;
		$(layer + ' .lpop-foot') ? contHeight = contHeight - $(layer + ' .lpop-foot').outerHeight() : contHeight;
        return contHeight;
    });
}
// layer popup close
function fnCloseSelect() {
	var $mask = $('.lpop-mask'),
		$lpop_wrap = $('.select-lpop-wrap, .lpop--wrap');
	$('body').removeClass('stop-scroll');
	$('.select-value.curTrriger').removeClass('curTrriger');
	$mask.hide();
    $lpop_wrap.hide();
}
 * 
 */
