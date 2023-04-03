const Switch = (props) => {
  return (
    <div className="total-limit-alram">
      <p className="alram-txt">한도가 늘어나면 알림받기</p>
      <div className="alram-btn" tabindex="0">
        <div className="form-switch" id="moneyChkAgree">
          <input type="checkbox" name="moneyChk" id="moneyChk" disabled />
          <label for="moneyChk"></label>
        </div>
      </div>
    </div>
  );
};

export default Switch;
