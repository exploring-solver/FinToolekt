import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Standard/Home';
import AuditHelper from './components/Tools/AuditHelper';
import Navbar from './components/Standard/Navbar';
import FraudDetection from './components/Tools/FraudDetection';
import NotFound from './components/Standard/NotFound';
import Help from './components/Standard/Help';
import About from './components/Standard/About';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/audit" element={<AuditHelper />} />
        <Route path="/fraud" element={<FraudDetection />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
