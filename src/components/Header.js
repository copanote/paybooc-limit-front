import '../limit.css';
import '../renew_2020.css';
import '../slick_swiper.css';

const Header = (props) => {
  const { title } = props;
  return (
    <header className="renew01-header my-card-header01">
      <a href="javascript:void(0)" className="btn-back">
        뒤로
      </a>
      <h1 class="tit">{title}</h1>
      <a href="javascript:void(0);" className="btn-close">
        닫기
      </a>
    </header>
  );
};

export default Header;
