import { useEffect, useState } from "react";
import api from "../api";

export default function AssignAssetForm({ onClose }) {
  const [employees, setEmployees] = useState([]);
  const [assets, setAssets] = useState([]);

  const [form, setForm] = useState({
    employeeId: "",
    assetId: "",
    assetType: "",
    duration: ""
  });

  useEffect(() => {
    api.get("/api/users").then(res => setEmployees(res.data));
    api.get("/api/assets").then(res => {
      setAssets(res.data.filter(a => a.status === "Available"));
    });
  }, []);

  const handleAssign = async () => {
    if (!form.employeeId || !form.assetId) {
      alert("Select employee and asset");
      return;
    }

    await api.post("/api/assignments", form);
    onClose();
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2>Assign Asset</h2>

        <select
          onChange={e => setForm({ ...form, employeeId: e.target.value })}
        >
          <option value="">Select Employee</option>
          {employees.map(e => (
            <option key={e._id} value={e.employeeId}>
              {e.employeeId} - {e.name}
            </option>
          ))}
        </select>

        <select
          onChange={e => {
            const asset = assets.find(a => a.assetId === e.target.value);
            setForm({
              ...form,
              assetId: asset.assetId,
              assetType: asset.type
            });
          }}
        >
          <option value="">Select Asset</option>
          {assets.map(a => (
            <option key={a._id} value={a.assetId}>
              {a.assetId} - {a.type}
            </option>
          ))}
        </select>

        <input
          placeholder="Duration (e.g. 6 months)"
          onChange={e => setForm({ ...form, duration: e.target.value })}
        />

        <div style={{ marginTop: "10px" }}>
          <button onClick={handleAssign}>Assign</button>
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
  width: "320px"
};