import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="./assets/shared/logo.svg" alt="logo" />
      </div>
      {/* <hr /> */}
      <div className='line'></div>
      <div className="navbar">
        <Link to="/" className="navbar-link">
          <span className="bold">00</span>HOME
        </Link>
        <Link to="/destinations" className="navbar-link">
          <span className="bold">01</span>DESTINATION
        </Link>
        <Link to="/crew" className="navbar-link">
          <span className="bold">02</span>CREW
        </Link>
        <Link to="/technologies" className="navbar-link">
          <span className="bold">03</span>TECHNOLOGY
        </Link>
      </div>
    </nav>
  );
}
