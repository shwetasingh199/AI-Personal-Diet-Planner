import { useEffect, useState } from "react";
import {
  getDietPlans,
  deleteDietPlan
} from "../services/firestoreService";

export default function SavedPlans({ user }) {
  const [plans, setPlans] = useState([]);
  const [error, setError] = useState("");

  async function loadPlans() {
    try {
      const data = await getDietPlans(user.uid);
      setPlans(data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }

  useEffect(() => {
    loadPlans();
  }, [user.uid]);

  async function removePlan(id) {
    await deleteDietPlan(id);
    await loadPlans();
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Saved Plans</h1>

        <p>
          Plans stored in Cloud Firestore.
        </p>
      </div>

      {error && (
        <p className="error">{error}</p>
      )}

      {plans.length === 0 && (
        <div className="card">
          No saved plans yet.
        </div>
      )}

      <div className="plan-grid">
        {plans.map((plan) => (
          <div className="card full" key={plan.id}>
            <h3>Meal Plan</h3>

            <p>
              <strong>Breakfast:</strong>{" "}
              {plan.breakfast}
            </p>

            <p>
              <strong>Lunch:</strong>{" "}
              {plan.lunch}
            </p>

            <p>
              <strong>Snack:</strong>{" "}
              {plan.snack}
            </p>

            <p>
              <strong>Dinner:</strong>{" "}
              {plan.dinner}
            </p>

            <button
              className="danger-button"
              onClick={() => removePlan(plan.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}