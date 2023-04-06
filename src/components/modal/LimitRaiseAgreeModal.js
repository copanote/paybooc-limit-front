import { useState } from 'react';

import BodyScrollLock from './BodyScrollLock';
import ModalHeader from './ModalHeader';
import ModalMask from './ModalMask';

const LimitRaiseAgreeModal = (props) => {
  const [isVisible, setVisible] = useState(props.isOpen);
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
      <div className="lpop--wrap lpop-alramAgreeGuide" style={isVisible ? { display: 'block' } : { display: 'none' }}>
        <div className="lpop-inner">
          <section className="select-lpop">
            <ModalHeader onModalClose={onModalClose} />

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
                    <input type="checkbox" name="agree" value="agree" id="agree" onClick={onAgreeCheckBoxChecked} />
                    <label for="agree">한도 상향이 가능한 경우 TM, LMS, 카카오톡, 이메일등을 통한 한도 상향 안내에 동의합니다.</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="lpop-foot">
              <button className="btn--submit full" disabled={isAgree ? false : true}>
                <span>한도 상향 알림 받기</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default LimitRaiseAgreeModal;

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
