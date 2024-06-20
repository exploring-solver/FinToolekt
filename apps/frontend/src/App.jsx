import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Standard/Home';
import AuditHelper from './components/Tools/AuditHelper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/audit" element={<AuditHelper />} />
        <Route path="/fraud" element={<AuditHelper />} />
        <Route path="/audit" element={<AuditHelper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
