import { useState, useEffect, useRef } from "react";
import { Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import {
  loadDataFromStorage,
  setNotificationListener,
  setResponseListener,
} from "../store/notifSlice";
import { useDispatch, useSelector } from "react-redux";
import storeData from "../utils/storeData";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function usePushNotifications() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const isActive = useSelector((state) => state.notif.isActive);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem("notif", JSON.stringify(isActive));
    })();
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: isActive,
        shouldPlaySound: isActive,
        shouldSetBadge: isActive,
      }),
    });

    registerForPushNotificationsAsync();

    notificationListener.current = Notifications.addNotificationReceivedListener();

    responseListener.current = Notifications.addNotificationResponseReceivedListener();
    schedulePushNotification();
  }, [isActive]);

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: "Here is the notification body",
        data: { data: "goes here" },
      },
      trigger: { hour: 20, minute: 32, repeats: true },
    });
  }

  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      //   token = (await Notifications.getExpoPushTokenAsync()).data;
      //   console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token;
  }
}
