import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Homepage from './pages/Homepage';
import AuthenticationPage from './pages/AuthenticationPage';
import Loading from './components/Loading'
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
          <Route path="/" >
            <Route index element={<Navigate to={isAuthenticated ? "/home" : "/auth"} />} />
            <Route path="auth" element={<AuthenticationPage />} />
            <Route path="home" element={isAuthenticated ? <Homepage /> : <Navigate to="/auth" /> } />
            <Route path="*" element={<div>Page not found.</div>} />
          </Route>
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
