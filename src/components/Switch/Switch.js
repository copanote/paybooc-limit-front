import { useState } from 'react';

const Switch = (props) => {
  const [isOn, setIsOn] = useState(false);
  const onClinkSwitch = () => {
    if (isOn) {
      setIsOn((isOn) => !isOn);
    } else {
      props.onChangeLimitRaiseNoticeAgreeModalState();
    }
  };

  return (
    <div className="total-limit-alram">
      <p className="alram-txt"> {isOn ? '한도상향 알림을 받고 있어요' : '한도가 늘어나면 알림받기'}</p>
      <div className="alram-btn" tabindex="0">
        <div className="form-switch " id="moneyChkAgree" onClick={onClinkSwitch}>
          <input type="checkbox" checked={isOn ? true : false} name="moneyChk" id="moneyChk" disabled />
          <label for="moneyChk"></label>
        </div>
      </div>
    </div>
  );
};

export default Switch;

/**
 *
 * 
 * function alramOn (){//알림on
    chkState = true;
    $('.total-limit-alram .form-switch').addClass('checked');
    $('.total-limit-alram .form-switch input[type=checkbox]').prop('disabled', false).prop('checked', true);
    $('.total-limit-alram .alram-txt').text('한도상향 알림을 받고 있어요');
}
function alramOff (){//알림off
    chkState = false;
    $('.total-limit-alram .form-switch').removeClass('checked');
    $('.total-limit-alram .form-switch input[type=checkbox]').prop('disabled', true).prop('checked', false);
    $('.lpop-alramAgreeGuide .form-select-box input[type=checkbox]').prop('checked', false);
    $('.lpop-alramAgreeGuide .btn--submit').prop('disabled', true);
    $('.total-limit-alram .alram-txt').text('한도가 늘어나면 알림받기');
    toastPopupAlert('한도상향 알림이 해지되었습니다.');
}
 */
