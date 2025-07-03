// import { useState } from "react";

// function AddUserForm({ onAddUser }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username.trim() === '' || password.trim() === '') return;
//     onAddUser({ email, username, password });
//     setUsername('');
//     setPassword('');
//     setEmail('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         placeholder="Enter email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Enter username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Enter password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Add User</button>
//     </form>
//   );
// }
// export default AddUserForm;

import { useState } from "react";
import "./AddUserForm.css"; // Import the custom CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function AddUserForm({ onAddUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') return;
    onAddUser({ email, username, password });
    setUsername('');
    setPassword('');
    setEmail('');
  };

  return (
    
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-wrapper">
        <FontAwesomeIcon icon={faEnvelope} className="input-icons" />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-input"
      />
      </div>

      <div className="input-wrapper"> 
        <FontAwesomeIcon icon={faUser} className="input-icons" />
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="form-input"
      />
      </div>

      <div className="input-wrapper"> 
        <FontAwesomeIcon icon={faLock} className="input-icons" />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-input"
      />
      </div>

      <button type="submit" className="submit-btn">Add User</button>
    </form>
  );
}

export default AddUserForm;



