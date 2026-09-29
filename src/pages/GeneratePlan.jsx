import { useState } from "react";
import {
  getProfile,
  saveDietPlan
} from "../services/firestoreService";

import { generateDietPlan } from "../services/dietEngine";

export default function GeneratePlan({ user }) {
  const [plan, setPlan] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    setMessage("");

    try {
      const profile = await getProfile(user.uid);

      if (!profile) {
        setMessage(
          "Please complete your profile first."
        );
        return;
      }

      const generated = generateDietPlan(profile);

      setPlan(generated);
    } catch (error) {
      console.error(error);
      setMessage("Unable to generate plan.");
    } finally {
      setLoading(false);
    }
  }

  async function savePlan() {
    if (!plan) return;

    try {
      await saveDietPlan(user.uid, plan);
      setMessage(
        "Plan saved to Cloud Firestore."
      );
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Generate Diet Plan</h1>

        <p>
          Rule-based educational recommendation engine.
        </p>
      </div>

      <button
        className="primary-button"
        onClick={generate}
        disabled={loading}
      >
        {loading
          ? "Generating..."
          : "Generate Plan"}
      </button>

      {message && (
        <p className="success">{message}</p>
      )}

      {plan && (
        <div className="plan-grid">
          <Meal
            title="Breakfast"
            value={plan.breakfast}
          />

          <Meal
            title="Lunch"
            value={plan.lunch}
          />

          <Meal
            title="Snack"
            value={plan.snack}
          />

          <Meal
            title="Dinner"
            value={plan.dinner}
          />

          <div className="card full">
            <h3>Nutrition Summary</h3>
            <p>{plan.nutritionSummary}</p>
          </div>

          <div className="card full">
            <h3>Hydration</h3>
            <p>{plan.hydration}</p>
          </div>

          <div className="warning full">
            <strong>Disclaimer</strong>
            <p>{plan.disclaimer}</p>
          </div>

          <button
            className="primary-button"
            onClick={savePlan}
          >
            Save to Cloud
          </button>
        </div>
      )}
    </div>
  );
}

function Meal({ title, value }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}