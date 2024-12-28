// Import the required Firebase scripts
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging.js");

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgQ-QKupCOWELFOeVO-2XpkCmvF-PGIXw",
    authDomain: "expense-traker-817a6.firebaseapp.com",
    projectId: "expense-traker-817a6",
    storageBucket: "expense-traker-817a6.firebasestorage.app",
    messagingSenderId: "371951158738",
    appId: "1:371951158738:web:26ce198abcd2545a1ab40b",
    measurementId: "G-CCLSQ2HN1K"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
