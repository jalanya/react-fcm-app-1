import firebase from 'firebase';

export const initializeFirebase = () => {
  var config = {
   apiKey: "AIzaSyCiESjsDowsSrm-UJ8dMVwoxNM1Ck5GV04",
   authDomain: "react-fcm-app-1.firebaseapp.com",
   databaseURL: "https://react-fcm-app-1.firebaseio.com",
   projectId: "react-fcm-app-1",
   storageBucket: "react-fcm-app-1.appspot.com",
   messagingSenderId: "305101476902"
 };

 firebase.initializeApp(config);
};

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    messaging.usePublicVapidKey('BNrnidYMyK7Nyo_M9avl3jZ2fj0F8sEYyyh7leB5MbCX98iZf-D2eWauhSeaaK8KnKa4zb7D5qtqL24p-fZEUoY');
    messaging.requestPermission()
    .then(() => {
      console.log('Have permission');
      return messaging.getToken();
    })
    .then(token => {
      console.log("FCM Token:", token);
    })
    .catch(error => {
      if (error.code === "messaging/permission-blocked") {
        console.log("Please Unblock Notification Request Manually");
      } else {
        console.log("Error Occurred", error);
      }
    });
  } catch (error) {
    console.error(error);
  }
}
