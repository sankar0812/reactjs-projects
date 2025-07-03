// import React from 'react';
// import './Navbar.css'; // Optional: if using custom CSS
// import { FaUserPlus, FaUsers, FaChartPie, FaSignOutAlt } from 'react-icons/fa';

// const Navbar = ({ onViewChange, onLogout }) => {
//   return (
//     <div className="Navbar">
//       <h3>Dashboard</h3>
//       <button onClick={() => onViewChange('add')}><FaUserPlus /> Add User</button>
//       <button onClick={() => onViewChange('list')}><FaUsers /> View Users</button>
//       <button onClick={() => onViewChange('graph')}><FaChartPie /> Dashboard Graph</button>
//       <button onClick={onLogout}>Logout</button>
//     </div>
//   );
// };  

// export default Navbar;

import React from 'react';
import './Navbar.css';
import { FaUserPlus, FaUsers, FaChartPie, FaSignOutAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

const Navbar = ({ onViewChange, onLogout }) => {
  return (
    <motion.div className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      <nav className="menu">
        <button className="menu-item" onClick={() => onViewChange('add')}>
          <FaUserPlus className="icon" />
          Add User
        </button>
        <button className="menu-item" onClick={() => onViewChange('list')}>
          <FaUsers className="icon" />
          View Users
        </button>
        <button className="menu-item" onClick={() => onViewChange('graph')}>
          <FaChartPie className="icon" />
          Dashboard Graph
        </button>
        <button className="menu-item logout" onClick={onLogout}>
          <FaSignOutAlt className="icon" />
          Logout
        </button>
      </nav>
    </motion.div>
  );
};

export default Navbar;
