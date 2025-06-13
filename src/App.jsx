import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import HypothyroidApp from './HypothyroidApp';
import HypothyroidAppTamil from './HypothyroidAppTamil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LanguageSelector />} />
        <Route path="/info-en" element={<HypothyroidApp />} />
        <Route path="/info-ta" element={<HypothyroidAppTamil />} />
      </Routes>
    </Router>
  );
}

export default App;
