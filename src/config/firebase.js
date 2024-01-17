
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);