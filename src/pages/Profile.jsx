import { useEffect, useState } from "react";
import {
  saveProfile,
  getProfile
} from "../services/firestoreService";

export default function Profile({ user }) {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    activityLevel: "Moderate",
    dietaryPreference: "Vegetarian",
    goal: "General balanced eating",
    allergies: ""
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getProfile(user.uid);

        if (data) {
          setProfile((old) => ({
            ...old,
            ...data
          }));
        }
      } catch (error) {
        console.error(error);
      }
    }

    load();
  }, [user.uid]);

  function updateField(event) {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await saveProfile(user.uid, profile);
      setMessage("Profile saved successfully.");
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Your Profile</h1>
        <p>
          Use synthetic/demo information only.
        </p>
      </div>

      <form
        className="form-card wide"
        onSubmit={handleSubmit}
      >
        <input
          name="name"
          placeholder="Name"
          value={profile.name}
          onChange={updateField}
          required
        />

        <input
          name="age"
          type="number"
          placeholder="Age"
          value={profile.age}
          onChange={updateField}
          required
        />

        <input
          name="height"
          type="number"
          placeholder="Height (cm)"
          value={profile.height}
          onChange={updateField}
          required
        />

        <input
          name="weight"
          type="number"
          placeholder="Weight (kg)"
          value={profile.weight}
          onChange={updateField}
          required
        />

        <label>Activity Level</label>

        <select
          name="activityLevel"
          value={profile.activityLevel}
          onChange={updateField}
        >
          <option>Low</option>
          <option>Moderate</option>
          <option>High</option>
        </select>

        <label>Dietary Preference</label>

        <select
          name="dietaryPreference"
          value={profile.dietaryPreference}
          onChange={updateField}
        >
          <option>Vegetarian</option>
          <option>Vegan</option>
          <option>General</option>
        </select>

        <label>Goal</label>

        <select
          name="goal"
          value={profile.goal}
          onChange={updateField}
        >
          <option>
            General balanced eating
          </option>

          <option>
            Weight-management demo
          </option>

          <option>
            Fitness-oriented
          </option>
        </select>

        <input
          name="allergies"
          placeholder="Optional preferences/allergies"
          value={profile.allergies}
          onChange={updateField}
        />

        <button className="primary-button">
          Save Profile
        </button>

        {message && (
          <p className="success">{message}</p>
        )}
      </form>
    </div>
  );
}