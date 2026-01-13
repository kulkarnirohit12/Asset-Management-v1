import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import AdminLogin from "./pages/AdminLogin";
import EmployeeLogin from "./pages/EmployeeLogin";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import AssetDetails from "./pages/AssetDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/admin/assets/:type" element={<AssetDetails />} />
        <Route path="/employee-dashboard/:employeeId" element={<EmployeeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}