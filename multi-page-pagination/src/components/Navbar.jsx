import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? '#0c81ff' : 'black',
    marginRight: '15px',
    textDecoration: 'none'
  });

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #f3e4e4', backgroundColor: '#e7f1fb' }}>
      <NavLink to="/" style={navStyle}>Home</NavLink>
      <NavLink to="/about" style={navStyle}>About</NavLink>
      <NavLink to="/contact" style={navStyle}>Contact</NavLink>
    </nav>
  );
}