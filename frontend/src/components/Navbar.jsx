import React from 'react';
import { NavLink } from 'react-router-dom';
import { Bot } from 'lucide-react';

const Navbar = () => {
  const activeStyle = ({ isActive }) => (isActive ? "nav-item active" : "nav-item");

  return (
    <nav className="navbar">
      <div className="nav-content">
        <NavLink to="/" className="nav-brand">
          <Bot size={28} color="#a78bfa" />
          <span>Open LLM Reader</span>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className={activeStyle}>Home</NavLink>
          <NavLink to="/domain" className={activeStyle}>Domain</NavLink>
          <NavLink to="/milestones" className={activeStyle}>Milestones</NavLink>
          <NavLink to="/documents" className={activeStyle}>Documents</NavLink>
          <NavLink to="/presentations" className={activeStyle}>Presentations</NavLink>
          <NavLink to="/about" className={activeStyle}>About Us</NavLink>
          <NavLink to="/contact" className={activeStyle}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
