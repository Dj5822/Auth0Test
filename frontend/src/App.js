import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Homepage from './pages/Homepage';
import AuthenticationPage from './pages/AuthenticationPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" >
            <Route index element={<Navigate to="/auth" />} />
            <Route path="home" element={<Homepage />} />
            <Route path="auth" element={<AuthenticationPage />} />
            <Route path="*" element={<div>Page not found.</div>} />
          </Route>
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
