import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 70px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f7fb",
        padding: "40px"
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "800px"
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 15px",
            background: "#dbeafe",
            color: "#2563eb",
            borderRadius: "20px",
            fontWeight: "bold",
            marginBottom: "20px"
          }}
        >
          CLOUD COMPUTING PROJECT
        </div>

        <h1
          style={{
            fontSize: "60px",
            margin: "10px 0"
          }}
        >
          AI-Powered
          <br />
          Personal Diet Planner
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#666",
            lineHeight: "1.6"
          }}
        >
          Create personalized educational meal plans
          using your dietary preferences and goals.
        </p>

        <div style={{ marginTop: "30px" }}>
          <Link to="/register">
            <button
              style={{
                padding: "14px 25px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                marginRight: "12px"
              }}
            >
              Get Started
            </button>
          </Link>

          <Link to="/login">
            <button
              style={{
                padding: "14px 25px",
                background: "white",
                color: "#222",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              Login
            </button>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "50px",
            flexWrap: "wrap"
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              width: "200px",
              border: "1px solid #ddd"
            }}
          >
            <h3>🔐 Authentication</h3>
            <p>Firebase Login</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              width: "200px",
              border: "1px solid #ddd"
            }}
          >
            <h3>☁️ Cloud Database</h3>
            <p>Firebase Firestore</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              width: "200px",
              border: "1px solid #ddd"
            }}
          >
            <h3>🤖 Diet Planner</h3>
            <p>Rule-based Engine</p>
          </div>
        </div>

        <p
          style={{
            marginTop: "40px",
            color: "#888",
            fontSize: "13px"
          }}
        >
          Educational/general-wellness example only. Not medical advice.
        </p>
      </div>
    </div>
  );
}