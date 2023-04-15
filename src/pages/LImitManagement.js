import Header from '../layout/Header';
import { LimitContextProvider } from '../store/LimitContext';
import '../limit.css';
import LImitManagementBody from './LImitManagementBody';
import LimitRaiseModal from '../components/UI/modal/LimitRaiseModal';
import ModalTest from '../components/UI/modal/ModalTest';

function LimitManagement() {
  return (
    <>
      <Header title={'이용한도관리'} />
      <LimitContextProvider>
        <LImitManagementBody />
      </LimitContextProvider>
      <ModalTest />
    </>
  );
}

export default LimitManagement;
