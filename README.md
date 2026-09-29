# 🥗 AI-Powered Personal Diet Planner

A cloud-based web application that generates personalized educational meal-plan examples based on a user's dietary preferences, activity level, and goals.

The application is built using **React and Firebase** and demonstrates important Cloud Computing concepts such as cloud authentication, cloud database, serverless architecture, security rules, protected routes, and cloud deployment.

---

## 📌 Project Overview

The **AI-Powered Personal Diet Planner** is designed as a simple cloud-based health and wellness planning application.

Users can:

- Create an account
- Log in securely
- Create and update their profile
- Select dietary preferences
- Select activity level
- Select a wellness/fitness goal
- Generate an educational meal-plan example
- View breakfast, lunch, snack, and dinner recommendations
- Save generated plans to the cloud
- View previously saved plans
- Delete saved plans
- Log out securely

The project uses Firebase services to demonstrate how cloud services can replace the need for maintaining a traditional backend server.

> **Important:** This application provides educational/general-wellness examples only. It is not medical advice and should not be used for diagnosis, treatment, or clinical decision-making.

---

# 🎯 Objectives

The main objectives of this project are:

1. Build a cloud-based web application using React.
2. Implement user authentication using Firebase Authentication.
3. Store user profiles using Cloud Firestore.
4. Store generated diet plans using Cloud Firestore.
5. Implement user-level access control using Firestore Security Rules.
6. Create protected routes for authenticated users.
7. Implement a lightweight rule-based recommendation engine.
8. Demonstrate a serverless cloud architecture.
9. Deploy the frontend using Firebase Hosting.
10. Maintain the project using Git and GitHub.

---

# 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React | Frontend user interface |
| Vite | Development and build tool |
| JavaScript | Application programming |
| React Router | Client-side routing |
| Firebase Authentication | User registration and login |
| Cloud Firestore | Cloud database |
| Firebase Security Rules | Data authorization |
| Firebase Hosting | Cloud deployment |
| Git | Version control |
| GitHub | Source-code hosting |

---

# ☁️ Cloud Computing Concepts Demonstrated

This project demonstrates several important cloud computing concepts.

### Cloud Authentication

Firebase Authentication manages:

- User registration
- User login
- User identity
- User sessions
- Logout

---

### Cloud Database

Cloud Firestore stores:

- User profiles
- Generated diet plans
- User-specific data

---

### Serverless Architecture

The application does not require a continuously running backend server.

Firebase provides managed cloud services for:

- Authentication
- Database
- Security
- Hosting

This reduces infrastructure management requirements.

---

### Scalability

Firebase services are managed cloud services that can scale as application usage increases.

The application does not need to manually manage database servers.

---

### Availability

Firebase services are hosted in the cloud and can be accessed through the internet.

---

### Security

Firestore Security Rules restrict access to user-specific information.

For example:

User A
   ↓
Can access User A's data

User B
   ↓
Can access User B's data

User A
   ↓
Cannot access User B's data

📂 Project Structure
AI-Personal-Diet-Planner/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Profile.jsx
│   │   ├── Dashboard.jsx
│   │   ├── GeneratePlan.jsx
│   │   └── SavedPlans.jsx
│   │
│   ├── services/
│   │   ├── firebase.js
│   │   ├── authService.js
│   │   ├── firestoreService.js
│   │   └── dietEngine.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── firestore.rules
├── firebase.json
├── .env.example
├── .gitignore
├── package.json
└── README.md
🗄️ Firestore Database
Users
users/{userId}

name
age
height
weight
activityLevel
dietaryPreference
goal
allergies
updatedAt
Diet Plans
dietPlans/{planId}

userId
breakfast
lunch
snack
dinner
nutritionSummary
hydration
disclaimer
createdAt

Each diet plan is associated with the authenticated user's Firebase UID.

🤖 Recommendation Engine

The current version uses a rule-based recommendation engine instead of a paid external AI API.

It supports:

Vegetarian
Vegan
General diet

and considers goals such as:

General balanced eating
Weight-management demo
Fitness-oriented

The engine generates a meal-plan example containing:

Breakfast
Lunch
Snack
Dinner
Nutrition Summary
Hydration Reminder

The architecture can later be extended with an external AI/LLM service.

🔐 Security

Firebase Authentication manages user identity.

Firestore Security Rules ensure that authenticated users can access only their own profile and diet plans.

The Firebase configuration is stored in environment variables.

The .env file is excluded from GitHub using .gitignore.

Only synthetic/demo data should be used in this academic project.

▶️ Run Locally
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/AI-Personal-Diet-Planner.git
cd AI-Personal-Diet-Planner
2. Install dependencies
npm install
3. Configure Firebase

Create a .env file in the project root:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

Enable Email/Password Authentication and Cloud Firestore in Firebase.

4. Start the application
npm run dev

Open:

http://localhost:5173
🧪 Demo Flow
Register
   ↓
Login
   ↓
Complete Profile
   ↓
Generate Diet Plan
   ↓
Save Plan
   ↓
View Saved Plans
   ↓
Delete Plan
   ↓
Logout
📚 Cloud Computing Concepts

This project demonstrates:

Cloud Computing
Serverless Architecture
Cloud Authentication
Cloud Database
Authentication & Authorization
Security Rules
CRUD Operations
Environment Variables
Cloud Deployment
Scalability concepts
Git/GitHub version control
🔮 Future Improvements
Integrate an actual AI/LLM recommendation service
Add nutrition API integration
Add calorie and macro tracking
Add charts and analytics
Add meal history
Add notifications
Add automated testing
Add GitHub Actions CI/CD
Add cloud monitoring and logging
⚠️ Disclaimer

This project is created for academic and educational purposes.

The generated meal plans are general-wellness examples and not medical advice. Users with medical conditions, allergies, or specific nutritional requirements should consult a qualified professional.

👨‍💻 Project Status
Component	Status
React Frontend	✅ Complete
Firebase Authentication	✅ Complete
Cloud Firestore	✅ Complete
User Profiles	✅ Complete
Diet Recommendation Engine	✅ Complete
Save/View/Delete Plans	✅ Complete
Firestore Security Rules	✅ Complete
Firebase Storage	⏭️ Not included
Firebase Hosting	🚀 Optional

Built as a Cloud Computing academic project using React and Firebase.


Then run:

git add README.md
git commit -m "Update project README"
git push

## author
SHWETA
