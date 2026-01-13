import { useNavigate } from "react-router-dom";

export default function Card({ title, value, route }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        width: "200px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
        cursor: "pointer",
        transition: "0.2s"
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h3>{title}</h3>
      <h1 style={{ color: "#4f46e5" }}>{value}</h1>
    </div>
  );
}