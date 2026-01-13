import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function EmployeeDashboard() {
  const { employeeId } = useParams();
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    api.get(`/api/assignments/employee/${employeeId}`)
      .then(res => setAssets(res.data));
  }, [employeeId]);

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Assigned Assets</h1>

      {assets.length === 0 ? (
        <p>No assets assigned</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Asset ID</th>
              <th>Asset Type</th>
              <th>Assigned Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {assets.map(a => (
              <tr key={a._id}>
                <td>{a.assetId}</td>
                <td>{a.assetType}</td>
                <td>{new Date(a.assignedAt).toDateString()}</td>
                <td>{a.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}