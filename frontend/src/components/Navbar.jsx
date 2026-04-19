import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeStyle = ({ isActive }) => (isActive ? "nav-item active" : "nav-item");

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <NavLink to="/" className="nav-brand" onClick={closeMenu}>
          <Bot size={28} color="#a78bfa" />
          <span>Open LLM Reader</span>
        </NavLink>
        
        {/* Mobile menu toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="#f8fafc" /> : <Menu size={28} color="#f8fafc" />}
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" className={activeStyle} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/domain" className={activeStyle} onClick={closeMenu}>Domain</NavLink>
          <NavLink to="/milestones" className={activeStyle} onClick={closeMenu}>Milestones</NavLink>
          <NavLink to="/documents" className={activeStyle} onClick={closeMenu}>Documents</NavLink>
          <NavLink to="/presentations" className={activeStyle} onClick={closeMenu}>Presentations</NavLink>
          <NavLink to="/about" className={activeStyle} onClick={closeMenu}>About Us</NavLink>
          <NavLink to="/contact" className={activeStyle} onClick={closeMenu}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
