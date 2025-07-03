// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Dashboard.css';
// import UserList from './UserList';

// export default function Dashboard() {
//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login'); // redirect if not authenticated
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // remove token
//     navigate('/login'); // redirect to login
//   };

//   const addUser = ({ username, password }) => {
//   const newUser = {
//     id: Date.now(),
//     username,
//     password
//   };
//   setUsers([...users, newUser]);
// };

// const updateUser = (updatedUser) => {
//   const newUsers = users.map(user =>
//     user.id === updatedUser.id ? updatedUser : user
//   );
//   setUsers(newUsers);
// };

//   const deleteUser = (id) => {
//     const updatedUsers = users.filter(user => user.id !== id);
//     setUsers(updatedUsers);
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-card">
//         <h1 className="dashboard-title">Welcome to your Dashboard!</h1>
//         <p className="dashboard-message">You have successfully logged in.</p>
//         <UserList users={users} onDeleteUser={deleteUser} onUpdateUser={updateUser} />
//         <AddUserForm onAddUser={addUser} />
//         <p className="dashboard-note">Manage your users below:</p>
//         <button className="logout-button" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }


// // Simple form to add a user
// function AddUserForm({ onAddUser }) {
//   const [name, setName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name.trim() === '') return;
//     onAddUser(name);
//     setName('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Enter user name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button type="submit">Add User</button>
//     </form>
//   );
// }


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
import UserList from './UserList';
import AddUserForm from './AddUserForm'; // ✅ Added missing import

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      fetchUsers();
    }
  }, [navigate, token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3000/auth/users', {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('Fetched users:', res.data); // ✅ Helpful for debugging
      setUsers(res.data.users || res.data); // ✅ Safer data handling
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  const addUser = async ({email, username, password }) => {
    try {
      const res = await axios.post(
        'http://localhost:3000/auth/register',
        {email, username, password },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUsers((prev) => [...prev, res.data]);
    } catch (err) {
      console.error('Error adding user:', err);
    }
  };

  const updateUser = async (updatedUser) => {
    try {
      await axios.put(
        `http://localhost:3000/auth/users/${updatedUser._id}`,
        updatedUser,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUsers((prev) =>
        prev.map((u) => (u._id === updatedUser._id ? updatedUser : u))
      );
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/auth/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers((prev) => prev.filter((u) => u._id !== id));
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className="dashboard-title">Welcome to your Dashboard!</h1>
        <p className="dashboard-message">You have successfully logged in.</p>

        <AddUserForm onAddUser={addUser} />
        <p className="dashboard-note">Manage your users below:</p>
        <UserList users={users} onDeleteUser={deleteUser} onUpdateUser={updateUser} />

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}



