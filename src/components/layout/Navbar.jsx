import { NavLink } from 'react-router-dom';
import siteConfig from '../../config/siteConfig.js';

export default function Navbar() {
  return <header className="navbar">
    <NavLink className="brand" to="/">{siteConfig.name}<span>.</span></NavLink>
    <nav className="nav-links" aria-label="Main navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/memory-tree">Memory tree</NavLink>
    </nav>
  </header>;
}
