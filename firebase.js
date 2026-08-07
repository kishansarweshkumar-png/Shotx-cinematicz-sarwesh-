import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9ErB3u-Oget2uWIrgB2DP_3CCyodMkNs",
  authDomain: "shotx-premium-course.firebaseapp.com",
  projectId: "shotx-premium-course",
  storageBucket: "shotx-premium-course.firebasestorage.app",
  messagingSenderId: "828389164193",
  appId: "1:828389164193:web:4594be23ad76e75b3f5ce0",
  measurementId: "G-DJR9ELP9TR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
