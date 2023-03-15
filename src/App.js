import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Cats from './pages/Cats';
import Dogs from './pages/Dogs';
import Others from './pages/Others';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/cats" element={<Cats />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/others" element={<Others />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
