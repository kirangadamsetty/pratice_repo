import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const API_URL = "https://gorest.co.in/public/v2/users";
const TOKEN = "221f55519d6804d85dad5824be750b54e3de0313d2a5e7c1ffcabc8e6fa8b517";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${TOKEN}`,
};

function UsersList() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "male",
    status: "active",
  });
  const [updateId, setUpdateId] = useState(null);

  // Fetch Users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(API_URL, { headers });
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    };
    fetchUsers();
  }, []);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add or Update User
  const handleSubmit = async () => {
    try {
      const method = updateId ? "PUT" : "POST";
      const url = updateId ? `${API_URL}/${updateId}` : API_URL;

      const res = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (updateId) {
        setUsers((prev) =>
          prev.map((user) => (user.id === updateId ? data : user))
        );
      } else {
        setUsers((prev) => [...prev, data]);
      }

      setFormData({ name: "", email: "", gender: "male", status: "active" });
      setUpdateId(null);
    } catch (err) {
      console.error("Error adding/updating user:", err);
    }
  };

  // Delete User
  const deleteUser = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers,
      });
      if (res.status === 204) {
        setUsers((prev) => prev.filter((u) => u.id !== id));
      }
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  // Prepare to Update
  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email, gender: user.gender, status: user.status });
    setUpdateId(user.id);
  };

  return (
    <div>
      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          border: "1px solid black",
          padding: "10px",
          maxWidth: "max-content",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <Button onClick={handleSubmit}>
          {updateId ? "Update User" : "Add User"}
        </Button>
      </form>

      {/* User Cards */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "20px" }}>
        {users.map((user) => (
          <div key={user.id} style={{ border: "1px solid black", padding: "10px" }}>
            <h3>{user.name}</h3>
            <h5>
              {user.email} - {user.gender}
            </h5>
            <p>Status: {user.status}</p>
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersList;
