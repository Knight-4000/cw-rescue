import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Cats from './pages/Cats';
import Cat from './pages/Cat';
import CreateCat from './pages/CreateCat';
import Dogs from './pages/Dogs';
import CreateDog from './pages/CreateDog';
import Others from './pages/Others';
import CreateOther from './pages/CreateOther';
import Mission from './pages/Mission';
import Needed from './pages/Needed';

import './App.css';
import Dog from './pages/Dog';
import Other from './pages/Other';


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
          <Route path="/cat/:catId" element={<Cat />} />
          <Route path="/create-dog" element={<CreateDog />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/:dog/:dogId" element={<Dog />} />
          <Route path="/create-other" element={<CreateOther />} />
          <Route path="/others" element={<Others />} />
          <Route path="/other/:otherId" element={<Other />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
