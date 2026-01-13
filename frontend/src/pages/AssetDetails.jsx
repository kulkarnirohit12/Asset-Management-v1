import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function AssetDetails() {
  const { type } = useParams();
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    api.get("/api/assets").then(res => setAssets(res.data));
  }, []);

  const filtered =
    type === "all" ? assets :
    type === "available" ? assets.filter(a => a.status === "Available") :
    type === "assigned" ? assets.filter(a => a.status === "Assigned") :
    assets.filter(a => a.type === type);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Asset ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
          <th>Condition</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map(a => (
          <tr key={a._id}>
            <td>{a.assetId}</td>
            <td>{a.name}</td>
            <td>{a.type}</td>
            <td>{a.status}</td>
            <td>{a.condition}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}