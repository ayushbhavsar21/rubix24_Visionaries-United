
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getMessaging } from "firebase/messaging";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCpmG1zh-CWsxrMlvsbnn3M8ZWG-L3jb5o",
  authDomain: "mentor-mentee-1f769.firebaseapp.com",
  projectId: "mentor-mentee-1f769",
  storageBucket: "mentor-mentee-1f769.appspot.com",
  messagingSenderId: "873225049042",
  appId: "1:873225049042:web:fe2287039fe7d2f48bae0b",
  measurementId: "G-J71N0QYQJ4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);