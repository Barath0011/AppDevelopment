import React from 'react';
import '../layout/Sidebar.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';


function Sidebar() {
  return (
    <div className='qww'>

    <div className="sidebar">
      <div className="sidebar-header">
        <h2>DASHBOARD</h2>
      </div>
      <ul className="sidebar-menu">
        
        <li><Link to='/NavBar'>Home</Link></li>
        <li><Link to='/cart'>Services</Link></li>
        <li><Link to='/contact'>About</Link></li>
        <li><Link to='/feed'>FEEDBACK</Link></li>
        
      </ul>
         </div>
    </div>
  );
}

export default Sidebar;