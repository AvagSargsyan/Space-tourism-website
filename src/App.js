import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Crew from './components/Crew';
import Destinations from './components/Destinations';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Technologies from './components/Technologies';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Space-tourism-website" element={<Home />} />
          <Route path="/Space-tourism-website/destinations" element={<Destinations />} />
          <Route path="/Space-tourism-website/crew" element={<Crew />} />
          <Route path="/Space-tourism-website/technologies" element={<Technologies />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
