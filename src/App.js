import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Cats from './pages/Cats';
import CreateCat from './pages/CreateCat';
import Dogs from './pages/Dogs';
import CreateDog from './pages/CreateDog';
import Others from './pages/Others';
import CreateOther from './pages/CreateOther';
import Mission from './pages/Mission';
import Needed from './pages/Needed';

import './App.css';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/needed" element={<Needed />} />
          <Route path="/create-cat" element={<CreateCat />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/create-dog" element={<CreateDog />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/create-other" element={<CreateOther />} />
          <Route path="/others" element={<Others />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
