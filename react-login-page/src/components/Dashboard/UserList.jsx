import { useState } from 'react';
import './UserList.css'; 

function UserList({ users, onDeleteUser, onUpdateUser }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserRow
          key={user.id}
          user={user}
          onDelete={onDeleteUser}
          onUpdate={onUpdateUser}
        />
      ))}
    </div>
  );
}


function UserRow({ user, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState(user.password);

  const handleUpdate = () => {
    onUpdate({ ...user, username, password });
    setEditing(false);
  };

  return (
    <div className="user-row">
      {editing ? (
        <>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
          <input value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <span><strong>{user.username}</strong></span>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => onDelete(user._id)}>Delete</button>
    </div>
  );
}

export default UserList