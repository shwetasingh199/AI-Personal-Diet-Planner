import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";

export default function Navbar({ user }) {
  const navigate = useNavigate();

  async function handleLogout() {
    await logoutUser();
    navigate("/login");
  }

  return (
    <nav
      style={{
        height: "70px",
        padding: "0 40px",
        background: "white",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: "22px",
          fontWeight: "bold"
        }}
      >
        🥗 AI Diet Planner
      </Link>

      <div style={{ display: "flex", gap: "20px" }}>
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/generate">Generate</Link>
            <Link to="/plans">Saved Plans</Link>

            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}