import '../limit.css';
import '../renew_2020.css';
import '../slick_swiper.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = (props) => {
  const { title } = props;
  const navigate = useNavigate();

  return (
    <header className="renew01-header my-card-header01">
      <a
        href="javascript:void(0)"
        onClick={() => {
          navigate(-1);
        }}
        className="btn-back"
      >
        뒤로
      </a>

      <h1 class="tit">{title}</h1>
      <a href="/" className="btn-close">
        닫기
      </a>
    </header>
  );
};

export default Header;
