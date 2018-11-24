# Using Firebase Cloud Messaging client app

<img src="images/Image 1 - Intro.png"/>

Open Google console and get the FCM Token as you can see image above. Then,
replace the `"to"` attribute with the generated Token.

```
curl -X POST -H "Authorization: key=AAAARwl3FCY:APA91bGEHvO_x3z-nKr4Rqn7CP9uhDJ-H3UO4cWtmZDhbgrlAWv3IZwFZvpjIxPC_mNNyfa5UP9GMb6Afy_xgd-qztYFVixwKVelvZzwnoDZJ36-F2rRPWG_a4tWY8mjCSx3cbwbqXqg" -H "Content-Type: application/json" -d '{
  "notification": {
   "title": "Web App Name 2-1",
   "body": "This is a good 2-1",
   "icon": "firebase-logo.png",
   "click_action": "http://www.facebook.com"
},
"to": "fYc6jwCr1o0:APA91bHPwmg44tJpSl7RdtcG1Ctv8Eip-WTAZ0yq7NJZm3GxeAz-4ufjxxJ0rVwnFdQOkpsOviB-mqK39ZS9PtMbk_V72e0Yk2Q9vxPObfaeg9EHJMLxX3KhmlCY45T_Ln8e1frynZ6k"
}' "https://fcm.googleapis.com/fcm/send"
```
