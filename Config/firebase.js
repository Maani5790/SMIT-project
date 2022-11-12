import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDocs, getDoc, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";






const firebaseConfig = {
  apiKey: "AIzaSyDYG_Xb8yhhAhzYyz_A4tS4DiiMqVviZMM",
  authDomain: "smit-attendace-system.firebaseapp.com",
  projectId: "smit-attendace-system",
  storageBucket: "smit-attendace-system.appspot.com",
  messagingSenderId: "11391237274",
  appId: "1:11391237274:web:0593563e4c998ef9f8f323",
  measurementId: "G-HV49VWE21V"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);



function signinFirebase(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}



function logoutfromfirebase() {
  return signOut(auth);
}


function addClassToDb(classSchedule, classTiming, teacherName, sectionName, courseName, batchNumber) {
  return addDoc(collection(db, "Classes"), {
      classSchedule,
      classTiming,
      teacherName,
      sectionName,
      courseName,
      batchNumber,
  });
}








export {
  signinFirebase,
  logoutfromfirebase,
  addClassToDb

}


