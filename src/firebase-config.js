import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCgQ-QKupCOWELFOeVO-2XpkCmvF-PGIXw",
    authDomain: "expense-traker-817a6.firebaseapp.com",
    projectId: "expense-traker-817a6",
    storageBucket: "expense-traker-817a6.firebasestorage.app",
    messagingSenderId: "371951158738",
    appId: "1:371951158738:web:26ce198abcd2545a1ab40b",
    measurementId: "G-CCLSQ2HN1K"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export { messaging };
