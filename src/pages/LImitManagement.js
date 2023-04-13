import Header from '../layout/Header';
import { LimitContextProvider } from '../store/LimitContext';
import '../limit.css';
import LImitManagementBody from './LImitManagementBody';

function LimitManagement() {
  return (
    <>
      <Header title={'이용한도관리'} />
      <LimitContextProvider>
        <LImitManagementBody />
      </LimitContextProvider>
    </>
  );
}

export default LimitManagement;
