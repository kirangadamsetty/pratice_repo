import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy auth logic
    if (user.email === "test@gmail.com" && user.password === "1234") {
      localStorage.setItem("token", true); // ✅ Save token
      navigate("/app"); // ✅ Navigate to app
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form>
      <input
        type="text"
        value={user.email}
        onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
        placeholder="Enter your Email"
        required
      />
      <input
        type="password"
        value={user.password}
        onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
        placeholder="Enter your password"
        required
      />
      <button onClick={handleSubmit}>Sign In</button>
    </form>
  );
}
export const ProtectedRoute = () => {
  const isAuth = localStorage.getItem("token"); // ✅ Read token

  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};
export default SignIn;
