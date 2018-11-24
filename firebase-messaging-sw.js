importScripts("https://www.gstatic.com/firebasejs/5.5.9/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.5.9/firebase-messaging.js");

var config = {
 apiKey: "AIzaSyCiESjsDowsSrm-UJ8dMVwoxNM1Ck5GV04",
 authDomain: "react-fcm-app-1.firebaseapp.com",
 databaseURL: "https://react-fcm-app-1.firebaseio.com",
 projectId: "react-fcm-app-1",
 storageBucket: "react-fcm-app-1.appspot.com",
 messagingSenderId: "305101476902"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();
