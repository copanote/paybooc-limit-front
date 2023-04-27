import { Link } from 'react-router-dom';

const LinkEtc = (props) => {
  return (
    <div className="limit-ect">
      <Link to="/change">
        <div className="text-link">금융서비스 이용동의 변경</div>
      </Link>
      <p>비씨카드 고객센터 : 1588-4000</p>
    </div>
  );
};

export default LinkEtc;
