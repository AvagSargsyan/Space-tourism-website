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
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
