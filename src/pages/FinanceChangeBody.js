import AgreeItem from '../components/modal/AgreeItem';

const FinanceChangeBody = () => {
  return (
    <>
      <div class="my-vr01 --gray has-bottom change-agree-area">
        <div class="sec">
          <div class="top-title-lap">
            <p class="top-title">
              바로카드 전용 금융상품의
              <br />
              동의 현황을 확인해 보세요.
            </p>
            <p class="top-title-ps">
              약관 동의 시 한도와 금리를 바로 확인할 수 있으며,
              <br />
              신용점수에 📊 <strong>영향을 주지 않아요.</strong>
            </p>
          </div>
          <div class="change-agree-box">
            <div class="fn-chk-list">
              <AgreeItem title={'장기카드대출(카드론) 이용동의'} />
              <AgreeItem title={'단기카드대출(현금서비스) 이용동의'} />
              <AgreeItem title={'이용한도 상향 안내 동의'} />
            </div>
          </div>
        </div>
        <div class="sec-bottom">
          <button class="btn btn-confirm" id="fnCheckFinal" disabled>
            변경하기
          </button>
        </div>
      </div>
    </>
  );
};

export default FinanceChangeBody;
