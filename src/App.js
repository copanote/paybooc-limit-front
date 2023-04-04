import './limit.css';
import { Route } from 'react-router-dom';
import LimitManagement from './pages/LImitManagement';
import FinanceAgreementChange from './pages/FinanceAgreementChange';

function App() {
  return (
    <>
      <Route path="/" element={<LimitManagement />} exact={true} />
      <Route path="/change" element={<FinanceAgreementChange />} />
    </>
  );
}

export default App;
