import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">Logo</div>
      <div className="navbar">
        <Link to="/" className="navbar-link">
          <span className="bold">00</span>HOME
        </Link>
        <Link to="/destination" className="navbar-link">
          <span className="bold">01</span>DESTINATION
        </Link>
        <Link to="/crew" className="navbar-link">
          <span className="bold">02</span>CREW
        </Link>
        <Link to="/technology" className="navbar-link">
          <span className="bold">03</span>TECHNOLOGY
        </Link>
      </div>
    </nav>
  );
}
