import { getToPathname } from '@remix-run/router';
import Body from '../components/Body';
import Header from '../components/Header';
import '../limit.css';

function LimitManagement() {
  return (
    <>
      <Header title={'이용한도관리'} />
      <Body />
    </>
  );
}

export default LimitManagement;
