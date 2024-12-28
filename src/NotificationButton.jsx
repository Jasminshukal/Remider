import React from "react";
import { getMessaging, getToken, onMessage, isSupported } from "firebase/messaging";
import { initializeApp } from "firebase/app";

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
const firebaseApp = initializeApp(firebaseConfig);

const NotificationButton = () => {
  const requestPermission = async () => {
    const supported = await isSupported();
    if (!supported) {
      alert("This browser does not support notifications.");
      return;
    }

    const messaging = getMessaging(firebaseApp);

    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        console.log("Notification permission granted.");
        
        // Get the FCM token
        const token = await getToken(messaging, {
          vapidKey: "BHHXau7hGdbQGgApFG7Ms2Wb0sSG_wpmqnUo4VT3ORv1Ke7EM1SRq8cEkU3e5mkWb0tipm1qCVo9gXGghMKzKi4",
        });

        if (token) {
          console.log("FCM Token:", token);
          alert(`FCM Token: ${token}`);
        } else {
          console.log("Failed to get FCM token.");
        }
      } else {
        console.log("Notification permission denied.");
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error);
    }
  };

  return (
    <div>
      <button onClick={requestPermission}>Enable Notifications</button>
    </div>
  );
};

export default NotificationButton;
