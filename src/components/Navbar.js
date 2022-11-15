import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import useWindowWidth from '../hooks/useWindowWidth';

export default function Navbar() {

  const windowWidth = useWindowWidth();
  const tabletWidth = 768;
  const mobileWidth = 480;

  return (
    <nav>
      <div className="logo">
        <img src="./assets/shared/logo.svg" alt="logo" />
      </div>
      <div className='line'></div>
      <div className="navbar">
        <Link to="/" className="navbar-link">
          <span className={windowWidth > tabletWidth ? 'bold' : 'hide'}>00</span>HOME
        </Link>
        <Link to="/destinations" className="navbar-link">
          <span className={windowWidth > tabletWidth ? 'bold' : 'hide'}>01</span>DESTINATION
        </Link>
        <Link to="/crew" className="navbar-link">
          <span className={windowWidth > tabletWidth ? 'bold' : 'hide'}>02</span>CREW
        </Link>
        <Link to="/technologies" className="navbar-link">
          <span className={windowWidth > tabletWidth ? 'bold' : 'hide'}>03</span>TECHNOLOGY
        </Link>
      </div>
    </nav>
  );
}
