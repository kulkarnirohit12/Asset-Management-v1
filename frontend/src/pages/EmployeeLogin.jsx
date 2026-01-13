import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EmployeeLogin() {
  const [employeeId, setEmployeeId] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!employeeId) return alert("Enter Employee ID");
    navigate(`/employee-dashboard/${employeeId}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Employee Login</h2>

      <input
        placeholder="Enter Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}