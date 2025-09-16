// import React from 'react';
// import { Home, Users } from 'lucide-react';

// // Sidebar Navigation Component
// const Sidebar = ({ setCurrentPage }) => (
//   <div className="w-64 bg-gray-800 text-white h-screen p-4 flex flex-col rounded-r-lg shadow-lg">
//     <div className="text-2xl font-bold mb-8 text-blue-400">FinanceApp</div>
//     <nav>
//       <ul>
//         <li className="mb-4">
//           <button
//             onClick={() => setCurrentPage('dashboard')}
//             className="flex items-center p-3 w-full text-left hover:bg-gray-700 rounded-lg transition-colors duration-200"
//           >
//             <Home className="mr-3" size={20} /> Dashboard
//           </button>
//         </li>
//         <li className="mb-4">
//           <button
//             onClick={() => setCurrentPage('clients')}
//             className="flex items-center p-3 w-full text-left hover:bg-gray-700 rounded-lg transition-colors duration-200"
//           >
//             <Users className="mr-3" size={20} /> Clients
//           </button>
//         </li>
//       </ul>
//     </nav>
//   </div>
// );

// export default Sidebar;


// import React from 'react';
// import { Home, Users } from 'lucide-react';

// // Sidebar Navigation Component
// const Sidebar = ({ setCurrentPage }) => (
//   <div className="sidebar-container">
//     <style>
//       {`
//         .sidebar-container {
//           width: 16rem; /* w-64 */
//           background-color: #1f2937; /* bg-gray-800 */
//           color: #fff; /* text-white */
//           height: 100vh; /* h-screen */
//           padding: 1rem; /* p-4 */
//           display: flex;
//           flex-direction: column; /* flex-col */
//           border-top-right-radius: 0.5rem; /* rounded-r-lg */
//           border-bottom-right-radius: 0.5rem; /* rounded-r-lg */
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
//         }

//         .sidebar-logo {
//           font-size: 1.5rem; /* text-2xl */
//           font-weight: 700; /* font-bold */
//           margin-bottom: 2rem; /* mb-8 */
//           color: #60a5fa; /* text-blue-400 */
//         }

//         .sidebar-nav ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }

//         .sidebar-nav li {
//           margin-bottom: 1rem; /* mb-4 */
//         }

//         .sidebar-button {
//           display: flex;
//           align-items: center;
//           padding: 0.75rem; /* p-3 */
//           width: 100%;
//           text-align: left;
//           background-color: transparent;
//           border: none;
//           color: #fff;
//           border-radius: 0.5rem; /* rounded-lg */
//           transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out; /* transition-colors duration-200 */
//           cursor: pointer;
//         }

//         .sidebar-button:hover {
//           background-color: #374151; /* hover:bg-gray-700 */
//         }

//         .sidebar-button svg {
//           margin-right: 0.75rem; /* mr-3 */
//         }
//       `}
//     </style>
//     <div className="sidebar-logo">FinanceApp</div>
//     <nav className="sidebar-nav">
//       <ul>
//         <li>
//           <button
//             onClick={() => setCurrentPage('dashboard')}
//             className="sidebar-button"
//           >
//             <Home size={20} /> Dashboard
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={() => setCurrentPage('clients')}
//             className="sidebar-button"
//           >
//             <Users size={20} /> Clients
//           </button>
//         </li>
//       </ul>
//     </nav>
//   </div>
// );

// export default Sidebar;


// import React from 'react';
// import { Home, Users, LogOut } from 'lucide-react'; // Import LogOut icon

// // Sidebar Navigation Component
// const Sidebar = ({ setCurrentPage, onLogout }) => ( // Accept onLogout prop
//   <div className="sidebar-container">
//     <style>
//       {`
//         .sidebar-container {
//           width: 16rem; /* w-64 */
//           background-color: #1f2937; /* bg-gray-800 */
//           color: #fff; /* text-white */
//           height: 100vh; /* h-screen */
//           padding: 1rem; /* p-4 */
//           display: flex;
//           flex-direction: column; /* flex-col */
//           border-top-right-radius: 0.5rem; /* rounded-r-lg */
//           border-bottom-right-radius: 0.5rem; /* rounded-r-lg */
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
//         }

//         .sidebar-logo {
//           font-size: 1.5rem; /* text-2xl */
//           font-weight: 700; /* font-bold */
//           margin-bottom: 2rem; /* mb-8 */
//           color: #60a5fa; /* text-blue-400 */
//         }

//         .sidebar-nav ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           flex-grow: 1; /* Allow nav to grow and push logout to bottom */
//         }

//         .sidebar-nav li {
//           margin-bottom: 1rem; /* mb-4 */
//         }

//         .sidebar-button {
//           display: flex;
//           align-items: center;
//           padding: 0.75rem; /* p-3 */
//           width: 100%;
//           text-align: left;
//           background-color: transparent;
//           border: none;
//           color: #fff;
//           border-radius: 0.5rem; /* rounded-lg */
//           transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out; /* transition-colors duration-200 */
//           cursor: pointer;
//         }

//         .sidebar-button:hover {
//           background-color: #374151; /* hover:bg-gray-700 */
//         }

//         .sidebar-button svg {
//           margin-right: 0.75rem; /* mr-3 */
//         }

//         .logout-button-wrapper {
//           margin-top: auto; /* Push to the bottom */
//           padding-top: 1rem; /* Add some space above it */
//           border-top: 1px solid rgba(255, 255, 255, 0.1); /* Subtle separator */
//         }

//         .logout-button {
//           display: flex;
//           align-items: center;
//           padding: 0.75rem;
//           width: 100%;
//           text-align: left;
//           background-color: #dc2626; /* Red color for logout */
//           border: none;
//           color: #fff;
//           border-radius: 0.5rem;
//           transition: background-color 0.2s ease-in-out;
//           cursor: pointer;
//           font-weight: 700;
//         }

//         .logout-button:hover {
//           background-color: #b91c1c; /* Darker red on hover */
//         }

//         .logout-button svg {
//           margin-right: 0.75rem;
//         }
//       `}
//     </style>
//     <div className="sidebar-logo">FinanceApp</div>
//     <nav className="sidebar-nav">
//       <ul>
//         <li>
//           <button
//             onClick={() => setCurrentPage('dashboard')}
//             className="sidebar-button"
//           >
//             <Home size={20} /> Dashboard
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={() => setCurrentPage('clients')}
//             className="sidebar-button"
//           >
//             <Users size={20} /> Clients
//           </button>
//         </li>
//       </ul>
//     </nav>
//     <div className="logout-button-wrapper">
//       <button
//         onClick={onLogout}
//         className="logout-button"
//       >
//         <LogOut size={20} /> Logout
//       </button>
//     </div>
//   </div>
// );

// export default Sidebar;


import React from 'react';
import { Home, Users, LogOut, DollarSign } from 'lucide-react'; // Import DollarSign icon

// Sidebar Navigation Component
const Sidebar = ({ setCurrentPage, onLogout }) => ( // Accept onLogout prop
  <div className="sidebar-container">
    <style>
      {`
        .sidebar-container {
          width: 16rem; /* w-64 */
          background-color: #1f2937; /* bg-gray-800 */
          color: #fff; /* text-white */
          height: 100vh; /* h-screen */
          padding: 1rem; /* p-4 */
          display: flex;
          flex-direction: column; /* flex-col */
          border-top-right-radius: 0.5rem; /* rounded-r-lg */
          border-bottom-right-radius: 0.5rem; /* rounded-r-lg */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
        }

        .sidebar-logo {
          font-size: 1.5rem; /* text-2xl */
          font-weight: 700; /* font-bold */
          margin-bottom: 2rem; /* mb-8 */
          color: #60a5fa; /* text-blue-400 */
        }

        .sidebar-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          flex-grow: 1; /* Allow nav to grow and push logout to bottom */
        }

        .sidebar-nav li {
          margin-bottom: 1rem; /* mb-4 */
        }

        .sidebar-button {
          display: flex;
          align-items: center;
          padding: 0.75rem; /* p-3 */
          width: 100%;
          text-align: left;
          background-color: transparent;
          border: none;
          color: #fff;
          border-radius: 0.5rem; /* rounded-lg */
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out; /* transition-colors duration-200 */
          cursor: pointer;
        }

        .sidebar-button:hover {
          background-color: #374151; /* hover:bg-gray-700 */
        }

        .sidebar-button svg {
          margin-right: 0.5rem; /* mr-3 */
        }

        .logout-button-wrapper {
          margin-top: auto; /* Push to the bottom */
          padding-top: 1rem; /* Add some space above it */
          border-top: 1px solid rgba(255, 255, 255, 0.1); /* Subtle separator */
        }

        .logout-button {
          display: flex;
          align-items: center;
          padding: 0.75rem;
          width: 100%;
          text-align: left;
          background-color: #dc2626; /* Red color for logout */
          border: none;
          color: #fff;
          border-radius: 0.5rem;
          transition: background-color 0.2s ease-in-out;
          cursor: pointer;
          font-weight: 700;
        }

        .logout-button:hover {
          background-color: #b91c1c; /* Darker red on hover */
        }

        .logout-button svg {
          margin-right: 0.75rem;
        }
      `}
    </style> 
    <div className="sidebar-logo">FinanceApp</div>
    <nav className="sidebar-nav">
      <ul>
        <li>
          <button
            onClick={() => setCurrentPage('dashboard')}
            className="sidebar-button"
          >
            <Home size={20} /> Dashboard
          </button>
        </li>
        <li>
          <button
            onClick={() => setCurrentPage('clients')}
            className="sidebar-button"
          >
            <Users size={20} /> Clients
          </button>
        </li>
        <li>
          {/* Updated to navigate to the new 'loanCalculations' page */}
          <button
            onClick={() => setCurrentPage('loanCalculations')}
            className="sidebar-button"
          >
            <DollarSign size={20} /> Loan Payments
          </button>
        </li>
      </ul>
    </nav>
    <div className="logout-button-wrapper">
      <button
        onClick={onLogout}
        className="logout-button"
      >
        <LogOut size={20} /> Logout
      </button>
    </div>
  </div>
);

export default Sidebar;

