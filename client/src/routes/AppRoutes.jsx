import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { NotFound } from '../pages/NotFound/NotFound';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};