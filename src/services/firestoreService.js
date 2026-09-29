import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  serverTimestamp
} from "firebase/firestore";

import { db } from "./firebase";

export async function saveProfile(userId, profile) {
  await setDoc(
    doc(db, "users", userId),
    {
      ...profile,
      updatedAt: serverTimestamp()
    },
    { merge: true }
  );
}

export async function getProfile(userId) {
  const snapshot = await getDoc(
    doc(db, "users", userId)
  );

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data();
}

export async function saveDietPlan(userId, plan) {
  const reference = await addDoc(
    collection(db, "dietPlans"),
    {
      userId,
      ...plan,
      createdAt: serverTimestamp()
    }
  );

  return reference.id;
}

export async function getDietPlans(userId) {
  const q = query(
    collection(db, "dietPlans"),
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  const plans = snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data()
  }));

  return plans.sort((a, b) => {
    const aTime = a.createdAt?.seconds || 0;
    const bTime = b.createdAt?.seconds || 0;

    return bTime - aTime;
  });
}

export async function deleteDietPlan(planId) {
  await deleteDoc(doc(db, "dietPlans", planId));
}