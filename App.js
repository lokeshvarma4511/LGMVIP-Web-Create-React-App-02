import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">Lokesh's Brand</div>
        <button className="btn" onClick={getUsers} disabled={loading}>
          {loading ? 'Loading...' : 'Get Users'}
        </button>
      </nav>
      <div className="home-content">
        <h1>Welcome to User Card App</h1>
        <p>
          This web application fetches user data from an API and displays it in a user card grid layout.
        </p>
      </div>
      <div className="user-card-grid">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          users.map(user => (
            <div className="user-card" key={user.id}>
              <img src={user.avatar} alt="User Avatar" className="user-avatar" />
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>{user.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;