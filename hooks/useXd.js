import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { setNotificationListener, setResponseListener } from "../store/notifSlice";

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: true,
//   }),
// });
// async function registerForPushNotificationsAsync() {
//     let token;
  
//     if (Platform.OS === "android") {
//       await Notifications.setNotificationChannelAsync("default", {
//         name: "default",
//         importance: Notifications.AndroidImportance.MAX,
//         vibrationPattern: [0, 250, 250, 250],
//         lightColor: "#FF231F7C",
//       });
//     }
  
//     if (Device.isDevice) {
//       const { status: existingStatus } =
//         await Notifications.getPermissionsAsync();
//       let finalStatus = existingStatus;
//       if (existingStatus !== "granted") {
//         const { status } = await Notifications.requestPermissionsAsync();
//         finalStatus = status;
//       }
//       if (finalStatus !== "granted") {
//         alert("Failed to get push token for push notification!");
//         return;
//       }
//       // token = (await Notifications.getExpoPushTokenAsync()).data;
//       // console.log(token);
//     } else {
//       alert("Must use physical device for Push Notifications");
//     }
  
//     return token;
//   }

const useXd = () => {
    
//     const [notification, setNotification] = useState(false);
//     const notificationListener = useRef();
//     const responseListener = useRef();
//     const checked = useSelector((state) => state.notif.isActive);
//   useEffect(() => {
//     async function schedulePushNotification() {
//       await Notifications.scheduleNotificationAsync({
//         content: {
//           title: "You've got mail! 📬",
//           body: "Here is the notification body",
//           data: { data: "goes here" },
//         },
//         trigger: {
//           hour: 13,
//           minute: 35,
//           repeats: true,
//         },
//       });
//     }
//     if (checked) {
//       registerForPushNotificationsAsync();
//       notificationListener.current =
//         Notifications.addNotificationReceivedListener();
//       responseListener.current =
//         Notifications.addNotificationResponseReceivedListener();
//       dispatch(setNotificationListener(notificationListener.current));
//       dispatch(setResponseListener(responseListener.current));
//       schedulePushNotification();
//     }
//   }, []);
};
export default useXd();
