import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers((prevUsers) => [...prevUsers, ...data]);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="app">
      <h1>Total Users: {users.length}</h1>

      <div className="grid">
        {users.map((user) => (
          <div key={user.id} className="card">
            <h2>{user.name}</h2>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Address:</strong> {user.address.street},{" "}
              {user.address.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
