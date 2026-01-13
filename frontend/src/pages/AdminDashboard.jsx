import { useEffect, useState } from "react";
import api from "../api";
import Card from "../components/Card";
import AddAssetForm from "../components/AddAssetForm";
import AddEmployeeForm from "../components/AddEmployeeForm";
import AssignAssetForm from "../components/AssignAssetForm";


export default function AdminDashboard() {
  const [assets, setAssets] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [showAssetForm, setShowAssetForm] = useState(false);
  const [showEmployeeForm, setShowEmployeeForm] = useState(false);
  const [showAssignForm, setShowAssignForm] = useState(false);


  // Fetch data from DB
  const fetchData = async () => {
  try {
    const assetRes = await api.get("/api/assets");
    const userRes = await api.get("/api/users");

    setAssets(assetRes.data);
    setEmployees(userRes.data);
  } catch (err) {
    console.error("Fetch failed:", err);
  }
};

  useEffect(() => {
    fetchData();
  }, []);

  const stats = {
    total: assets.length,
    available: assets.filter(a => a.status === "Available").length,
    assigned: assets.filter(a => a.status === "Assigned").length,
    laptop: assets.filter(a => a.type === "Laptop").length,
    phone: assets.filter(a => a.type === "Phone").length,
    software: assets.filter(a => a.type === "Software").length,
    accessory: assets.filter(a => a.type === "Accessory").length
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Admin Dashboard</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setShowAssetForm(true)}>+ Add Asset</button>
        &nbsp;&nbsp;&nbsp;<button onClick={() => setShowEmployeeForm(true)}>+ Add Employee</button>
        &nbsp;&nbsp;&nbsp;<button onClick={() => setShowAssignForm(true)}>
          Assign Asset
        </button>

      </div>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        <Card title="Total Assets" value={stats.total} route="/admin/assets/all" />
        <Card title="Available Assets" value={stats.available} route="/admin/assets/available" />
        <Card title="Assigned Assets" value={stats.assigned} route="/admin/assets/assigned" />
        <Card title="Laptops" value={stats.laptop} route="/admin/assets/Laptop" />
        <Card title="Phones" value={stats.phone} route="/admin/assets/Phone" />
        <Card title="Software" value={stats.software} route="/admin/assets/Software" />
        <Card title="Accessories" value={stats.accessory} route="/admin/assets/Accessory" />
      </div>

      {showAssetForm && (
        <AddAssetForm
          onClose={() => {
            setShowAssetForm(false);
            fetchData();
          }}
        />
      )}

      {showEmployeeForm && (
        <AddEmployeeForm
          onClose={() => {
            setShowEmployeeForm(false);
            fetchData();
          }}
        />
      )}

      {showAssignForm && (
        <AssignAssetForm
          onClose={() => {
            setShowAssignForm(false);
            fetchData();
          }}
        />
      )}


    </div>
  );
}