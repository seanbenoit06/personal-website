import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import AboutMe from './AboutMe';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
