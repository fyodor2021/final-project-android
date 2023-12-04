import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase} from 'firebase/database';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  apiKey: "AIzaSyADZpxUN2-c6e49-uFeLZPljDCJhCxVjVw",
  authDomain: "final-project-android-e5084.firebaseapp.com",
  projectId: "final-project-android-e5084",
  databaseURL: "https://final-project-android-e5084-default-rtdb.firebaseio.com/",
  storageBucket: "final-project-android-e5084.appspot.com",
  messagingSenderId: "726881465345",
  appId: "1:726881465345:web:bcc7c2f34a8fa9af7bbc00",
  measurementId: "G-5MX8Z21DHY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const database  = getDatabase(app);


