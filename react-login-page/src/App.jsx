// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Login from './Login'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// function App() {
//   return (
//     <div className="App">
//       <Router>
//           <Routes>
//              <Route path="/" element={<Login />} />
//           </Routes>
//       </Router>
   
//     </div>
//   )
// }

// export default App
// import { useState } from 'react';
// import AuthForm from './AuthForm';


// function App() {
//   const [mode, setMode] = useState('signin');

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-pink-500">
//       <div className="bg-white rounded-2xl shadow-2xl p-8 w-96 animate-fade-in">
//         <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">
//           {mode === 'signin' ? 'Sign In' : 'Sign Up'}
//         </h2>
//         <AuthForm mode={mode} />
//         <p className="text-center mt-4 text-sm text-gray-600">
//           {mode === 'signin' ? 'Don\'t have an account?' : 'Already have an account?'}
//           <button
//             onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
//             className="text-indigo-500 font-semibold ml-1 hover:underline"
//           >
//             {mode === 'signin' ? 'Sign Up' : 'Sign In'}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import Dashboard from './components/Dashboard/Dashboard';
import AuthForm from './components/AuthForm/AuthForm';
import AddUserForm from './components/Dashboard/AddUserForm';

// import './index.css';

export default function App() {
  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/" element={<LoginPage />} /> */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>  
      </Router>
    </div>
    
  );
}




// import React, { useState, useEffect } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Component mounted or count changed");
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }
//  export default function App() {
//   return (
//     <div className="App">
//       <h1>React Counter Example</h1>
//       <Counter />
//     </div>
//   );
// }