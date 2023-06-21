importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyA1dgB_c3CZQ6qcg5iBk73iAxkEGp-9-bE",
    authDomain: "fir-37bc1.firebaseapp.com",
    projectId: "fir-37bc1",
    storageBucket: "fir-37bc1.appspot.com",
    messagingSenderId: "87442233793",
    appId: "1:87442233793:web:caf536e0ebaad0ecce7740",
    measurementId: "G-0VMV8K1CJC"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification       = JSON.parse(payload);
    const notificationOption = {
        body: notification.body,
        icon: notification.icon
    };
    return self.registration.showNotification(payload.notification.title, notificationOption);
});