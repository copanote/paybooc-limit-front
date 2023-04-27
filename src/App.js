import './limit.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LimitManagement from './pages/LImitManagement';
import FinanceAgreementChange from './pages/FinanceAgreementChange';
import { AuthContextProvider } from './store/auth-context';
import LimitProvider from './store/LimitProvider';
import { ModalContextProvider } from './store/modal-context';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <LimitManagement /> },
    { path: '/change', element: <FinanceAgreementChange /> },
  ]);

  return (
    <AuthContextProvider>
      <LimitProvider>
        <ModalContextProvider>
          <RouterProvider router={router} />
        </ModalContextProvider>
      </LimitProvider>
    </AuthContextProvider>
  );
}

export default App;
