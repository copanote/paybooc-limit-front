import LimitChangeBox from './LimitChangeBox';
import ModalHeader from './ModalHeader';
import Modal from './Modal';

const ModalTest = (props) => {
  return (
    <Modal>
      <div className="lpop--wrap lpop-limitChangeAgree" style={{ display: 'block' }}>
        <div className="lpop-inner">
          <section className="select-lpop">
            <ModalHeader onModalClose={props.onModalClose} />

            <div className="lpop-cont">
              <div className="limit-change-view">
                <p className="limit-title">다음과 같이 한도를 변경합니다.</p>
                <div className="limit-list">
                  <LimitChangeBox title={'총 이용한도'} prevAmount={'1,000'} afterAmount={'1,200'} />
                  <LimitChangeBox title={'단기카드대출한도'} prevAmount={'180'} afterAmount={'300'} />
                </div>
                <p className="limit-ps">부분상향 및 한도하향은 BC 바로카드 심사센터 (1577-3566) 로 문의해 주세요.</p>
                <div className="limit-agree">
                  <div className="chkSingle">
                    <input type="checkbox" name="lagree" id="lagree" checked />
                    <label for="lagree">한도가 늘어나면 알림을 받을게요</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="lpop-foot">
              <button className="btn--submit full">
                <span>한도변경</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </Modal>
  );
};

export default ModalTest;

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
