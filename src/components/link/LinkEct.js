import { Link } from 'react-router-dom';

const LinkEtc = (props) => {
  return (
    <div className="limit-ect">
      <Link to="/change">
        <a href="#none" className="text-link">
          금융서비스 이용동의 변경
        </a>
      </Link>
      <p>비씨카드 고객센터 : 1588-4000</p>
    </div>
  );
};

export default LinkEtc;
