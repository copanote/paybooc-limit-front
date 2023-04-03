import LinkItem from './LinkItem';

const Links = () => {
  const linkItems = [
    { link: 'https://naver.com', title: '카드별 한도관리' },
    { link: 'https://daum.net', title: '백화점 특별한도 신청' },
  ];

  const items = linkItems.map((i) => (
    <div key={i.title}>
      <LinkItem title={i.title} link={i.link} />
    </div>
  ));

  return (
    <>
      <ul className="limit-link">{items}</ul>
    </>
  );
};

export default Links;
