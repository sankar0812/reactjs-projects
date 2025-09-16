// export default function Sidebar() {
//   return (
//     <aside className="sidebar">
//       <h2>Finance App</h2>
//       <nav>
//         <ul>
//           <li>Dashboard</li>
//           <li>Clients</li>
//           <li>Reports</li>
//         </ul>
//       </nav>
//     </aside>
//   );
// }

// import '../styles/sidebar.css';

// export default function Sidebar() {
//   return (
//     <aside className="sidebar">
//       <h2>💰 Finance App</h2>
//       <nav>
//         <ul>
//           <li>Dashboard</li>
//           <li>Clients</li>
//           <li>Settings</li>
//         </ul>
//       </nav>
//     </aside>
//   );
// }

// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>💰 Finance App</h2>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/add-client">Add Client</Link></li>
          <li><Link to="#">Settings</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
