import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="main-header">
      <div className="left-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart 🛒</Link>
      </div>
      <div className="logo">🛍️ ShoppyGlobe</div>
    </header>
  );
}
