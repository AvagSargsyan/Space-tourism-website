import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import useWindowWidth from '../hooks/useWindowWidth';

export default function NavLink({ number, name, to }) {

  const windowWidth = useWindowWidth();
  const tabletWidth = 768;
  const mobileWidth = 480;

  return (
    <Link to={to} className="navbar-link">
      <span
        className={
          windowWidth > tabletWidth || windowWidth < mobileWidth
            ? 'bold'
            : 'hide'
        }
      >
        {number}
      </span>
      {name}
    </Link>
  )
}
