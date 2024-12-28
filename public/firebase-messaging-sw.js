/* eslint-disable no-undef */

// Import Firebase scripts
importScripts("https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js");

// Firebase configuration
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

// Retrieve Firebase Messaging instance
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);

  const notificationTitle = payload.notification?.title || "Background Notification";
  const notificationOptions = {
    body: payload.notification?.body || "Background Notification body.",
    icon: payload.notification?.icon || "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
