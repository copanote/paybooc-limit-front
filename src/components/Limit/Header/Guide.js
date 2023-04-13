import Tooltip from '../../UI/tooltip/Tooltip';

const Guide = () => {
  console.log('On Goide');
  return (
    <ul className="text-guide">
      <li>
        총 이용한도 내에서 일시불·할부 및 단기카드대출(현금서비스)을 이용할 수 있습니다.
        <Tooltip title={'한도변경 안내'} desc={'최대한도 이내 부분상향 및 하향은 BC 바로카드 고객센터로 문의 해 주세요.'} />
      </li>
    </ul>
  );
};

export default Guide;
