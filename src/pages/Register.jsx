import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    try {
      await registerUser(email, password);
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="auth-page">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <p className="muted">
          Use synthetic/demo information.
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength="6"
          required
        />

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <button className="primary-button">
          Register
        </button>

        <p>
          Already registered?{" "}
          <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}