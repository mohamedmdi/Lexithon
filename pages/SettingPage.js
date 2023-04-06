import { ListItem, Switch, Text } from "@react-native-material/core";
import Setting from "../components/setting/Setting";
import { useEffect, useState } from "react";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useDispatch, useSelector } from "react-redux";
import { setIsActive } from "../store/notifSlice";
import usePushNotifications from "../hooks/usePushNotifications";
import { ScrollView } from "react-native";
import Profile from "../components/setting/Profile";
import Body from "../components/layout/Body";
import { Divider } from "@rneui/base";
import DangerZone from "../components/setting/DangerZone";

const SettingPage = () => {
  const dispatch = useDispatch();
  const notif = useSelector((state) => state.notif);

  const handelPress = () => {
    dispatch(setIsActive());
  };
  return (
    <>
      {/* <Setting></Setting> */}
      <>
        <Body>
          <Profile></Profile>
          <ScrollView>
            <Text variant="h6" style={{ marginBottom: 18 }}>
              General Settings
            </Text>
            {/* <Divider style={{ marginBottom: 30 }} /> */}
            <ListItem
              onPress={() => handelPress()}
              title="Notification"
              secondaryText="Daily Exercice Reminder"
              trailing={
                <Switch
                  value={notif.isActive}
                  onValueChange={() => handelPress()}
                />
              }
            ></ListItem>
            <Divider style={{ marginBottom: 30 }} />
            <DangerZone />
          </ScrollView>
        </Body>
      </>
    </>
  );
};

export default SettingPage;
