import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getProfile,
  getDietPlans
} from "../services/firestoreService";

export default function Dashboard({ user }) {
  const [profile, setProfile] = useState(null);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const userProfile =
          await getProfile(user.uid);

        const userPlans =
          await getDietPlans(user.uid);

        setProfile(userProfile);
        setPlans(userPlans);
      } catch (error) {
        console.error(error);
      }
    }

    load();
  }, [user.uid]);

  return (
    <div className="page">
      <div className="page-header">
        <h1>
          Welcome,{" "}
          {profile?.name || "User"} 👋
        </h1>

        <p>{user.email}</p>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h3>Goal</h3>
          <p>
            {profile?.goal || "Not configured"}
          </p>
        </div>

        <div className="card">
          <h3>Diet Preference</h3>
          <p>
            {profile?.dietaryPreference ||
              "Not configured"}
          </p>
        </div>

        <div className="card">
          <h3>Saved Plans</h3>
          <p>{plans.length}</p>
        </div>
      </div>

      <div className="action-grid">
        <Link
          to="/generate"
          className="action-card"
        >
          <h3>Generate New Plan</h3>
          <p>
            Create an educational meal-plan
            example.
          </p>
        </Link>

        <Link
          to="/plans"
          className="action-card"
        >
          <h3>Previous Plans</h3>
          <p>
            View your saved plans.
          </p>
        </Link>

        <Link
          to="/profile"
          className="action-card"
        >
          <h3>Edit Profile</h3>
          <p>
            Update your preferences.
          </p>
        </Link>
      </div>

      <div className="warning">
        Educational/general-wellness example only.
        This application does not provide medical advice.
      </div>
    </div>
  );
}