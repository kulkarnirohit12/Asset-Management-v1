import { useState } from "react";
import api from "../api";

export default function AddAssetForm({ onClose }) {
  const [asset, setAsset] = useState({
    assetId: "",
    name: "",
    type: "Laptop",
    condition: "Good",
    status: "Available"
  });

  const handleChange = (e) => {
    setAsset({ ...asset, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/api/assets", asset);
    onClose();
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2>Add Asset</h2>

        <input name="assetId" placeholder="Asset ID" onChange={handleChange} />
        <input name="name" placeholder="Asset Name" onChange={handleChange} />

        <select name="type" onChange={handleChange}>
          <option>Laptop</option>
          <option>Phone</option>
          <option>Software</option>
          <option>Accessory</option>
        </select>

        <select name="condition" onChange={handleChange}>
          <option>Good</option>
          <option>Repair</option>
          <option>Damaged</option>
        </select>

        <div style={{ marginTop: "10px" }}>
          <button onClick={handleSubmit}>Add</button>
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