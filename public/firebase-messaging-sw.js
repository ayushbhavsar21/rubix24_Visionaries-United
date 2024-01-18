importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyCpmG1zh-CWsxrMlvsbnn3M8ZWG-L3jb5o",
    authDomain: "mentor-mentee-1f769.firebaseapp.com",
    projectId: "mentor-mentee-1f769",
    storageBucket: "mentor-mentee-1f769.appspot.com",
    messagingSenderId: "873225049042",
    appId: "1:873225049042:web:fe2287039fe7d2f48bae0b",
    measurementId: "G-J71N0QYQJ4"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});