import { useState } from "react";
import api from "../api";

export default function AddEmployeeForm({ onClose }) {
  const [employee, setEmployee] = useState({
    employeeId: "",
    name: "",
    role: "employee"
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await api.post("/api/users/create", employee);
    onClose();
  } catch (err) {
    alert(err.response?.data?.message || "Failed to create employee");
  }
};

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2>Add Employee</h2>

        <input
          name="employeeId"
          placeholder="Employee ID"
          onChange={handleChange}
        />
        <input
          name="name"
          placeholder="Employee Name"
          onChange={handleChange}
        />

        <select name="role" onChange={handleChange}>
          <option value="employee">Employee</option>
          <option value="intern">Intern</option>
        </select>

        <div style={{ marginTop: "10px" }}>
          <button onClick={handleSubmit}>Create</button>
          <button onClick={onClose} style={{ marginLeft: "10px" }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000
};

const modal = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "300px"
};