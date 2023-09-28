importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBXKcqlXkKXxWBJCqjrnBXotLLR64zA5Ak",
    authDomain: "md-global-services.firebaseapp.com",
    projectId: "md-global-services",
    storageBucket: "md-global-services.appspot.com",
    messagingSenderId: "283159834878",
    appId: "1:283159834878:web:58b8228b8238e223b235af",
    measurementId: "G-SGJCNDP2KV",
    databaseURL: "...",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});