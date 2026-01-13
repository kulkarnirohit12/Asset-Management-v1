import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      &nbsp; &nbsp;&nbsp; &nbsp;<h1>Asset Management System</h1>
      <p>Manage organizational assets efficiently</p>

      <button onClick={() => navigate("/admin-login")}>
        Admin Login
      </button>
        &nbsp; &nbsp;
      <button onClick={() => navigate("/employee-login")}>
        Employee Login
      </button>
    </div>
  );
}