import { getToken } from "firebase/messaging";
import { messaging } from "./firebase-config";

// Function to request permission and get token
export const requestUserToken = async () => {
  try {
    // Request notification permission
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Notification permission granted.");
      
      // Get the FCM token
      const token = await getToken(messaging, {
        vapidKey: "BHHXau7hGdbQGgApFG7Ms2Wb0sSG_wpmqnUo4VT3ORv1Ke7EM1SRq8cEkU3e5mkWb0tipm1qCVo9gXGghMKzKi4",
      });

      if (token) {
        console.log("User FCM Token:", token);
        return token;
      } else {
        console.error("No registration token available. Request permission to generate one.");
      }
    } else {
      console.error("Notification permission not granted.");
    }
  } catch (error) {
    console.error("An error occurred while retrieving token: ", error);
  }
};
