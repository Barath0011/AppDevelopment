import React from 'react';
import '../layout/Sidebar.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>DASHBOARD</h2>
      </div>
      <ul className="sidebar-menu">
        
        <li><Link to='/NavBar'>Home</Link></li>
        <li><Link to='/product'>Services</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/feed'>FEEDBACK</Link></li>
        <li><Link to='/NavBar'>Back</Link></li>
        
      </ul>
    </div>
  );
}

export default Sidebar;