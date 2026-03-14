import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import TermsOfService from './pages/TermsOfService';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}
