import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Crew from './components/Crew';
import Destination from './components/Destination';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Technology from './components/Technology';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
