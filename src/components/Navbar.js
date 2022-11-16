// import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import useWindowWidth from '../hooks/useWindowWidth';
import NavLink from './NavLink';
import { useState } from 'react';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const windowWidth = useWindowWidth();
  const mobileWidth = 480;

  const menuIcon = (
    <img
      src="./assets/menu-icon.svg"
      alt="close"
      className="menu-icon"
      onClick={toggleMenu}
    />
  );

  const closeIcon = (
    <img
      src="./assets/close-icon.svg"
      alt="close"
      className="close-menu-icon"
      onClick={toggleMenu}
    />
  );

  const navlinks = (
    <div className="navbar">
      {windowWidth < mobileWidth ? closeIcon : ''}
      <NavLink number="00" name="HOME" to="/" />
      <NavLink number="01" name="DESTINATION" to="/destinations" />
      <NavLink number="02" name="CREW" to="/crew" />
      <NavLink number="03" name="TECHNOLOGY" to="/technologies" />
    </div>
  );

  function toggleMenu() {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  }

  return (
    <nav>
      <div className="logo">
        <img src="./assets/shared/logo.svg" alt="logo" />
      </div>
      <div className="line"></div>
      {windowWidth > mobileWidth ? navlinks : showMenu ? navlinks : menuIcon}
    </nav>
  );
}
