// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBLXSzcEHzEQJyCkcJPfcg94hRUixLCZU0",
  authDomain: "alarmeesp32-11b09.firebaseapp.com",
  projectId: "alarmeesp32-11b09",
  storageBucket: "alarmeesp32-11b09.appspot.com",
  messagingSenderId: "1070724270737",
  appId: "1:1070724270737:web:c9692a85da1a0b5caa4d30",
  measurementId: "G-JCTEGGT646"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig)
} else {
  app = getApps()[0]
}
const auth = getAuth(app)

export { auth, app };