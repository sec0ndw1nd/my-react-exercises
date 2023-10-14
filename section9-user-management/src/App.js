import React, { useState } from 'react';
import AddUserForm from './Users/AddUserForm';
import UsersList from './Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (newUserInfo) => {
    setUsers((prevUsers) => [...prevUsers, newUserInfo]);
  };

  return (
    <div>
      <AddUserForm onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
