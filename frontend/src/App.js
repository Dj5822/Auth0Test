import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import Loading from './components/Loading/Loading'
import PageLayout from './layout/PageLayout';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  // Will navigate to authentication page if not authenticated.
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Navigate to={isAuthenticated ? "/home" : "/auth"} />} />
            <Route path="auth" element={<AuthenticationPage />} />
            <Route path="home" element={<Homepage />} />
            <Route path="*" element={<div>Page not found.</div>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
