
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Program_index from './pages/Program_index';
import AttractionIndex from './pages/Attractions';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AttractionIndex/>} />
      </Routes>
    </Router>
  );
}

export default App;
