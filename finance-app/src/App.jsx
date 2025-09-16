// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Dashboard from './pages/Dashboard'
// import './styles/app.css'

// function App() {
//   return (
//     <div className="App">
//       <Dashboard />
//     </div>
//   )
    
// }

// export default App


// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import AddClient from './pages/AddClient'; // 👈 create this
// import './styles/app.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav className="nav-bar">
//           <Link to="/">Dashboard</Link>
//           <Link to="/clients/add">Add Client</Link>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/clients/add" element={<AddClient />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddClientPage from './pages/AddClient';
import './styles/app.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-client" element={<AddClientPage />} />
      </Routes>
    </Router>
  );
}

export default App;
