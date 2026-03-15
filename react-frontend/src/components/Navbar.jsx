import { Link, useLocation } from 'react-router-dom';
import '../styles/App.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Product Management
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/products/create" className={location.pathname === '/products/create' ? 'active' : ''}>
              Add Product
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;