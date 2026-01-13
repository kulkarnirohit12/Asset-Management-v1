import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Admin Login</h2>

      <button onClick={() => navigate("/admin-dashboard")}>
        Login
      </button>
    </div>
  );
}