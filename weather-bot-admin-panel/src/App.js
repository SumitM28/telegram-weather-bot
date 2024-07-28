import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import Admin from './Admin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<GoogleAuth />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
