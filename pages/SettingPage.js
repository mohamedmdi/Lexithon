import { ListItem, Switch, Text } from "@react-native-material/core";
import Setting from "../components/setting/Setting";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePushNotifications from "../hooks/usePushNotifications";
import { ScrollView, View } from "react-native";
import Profile from "../components/setting/Profile";
import Body from "../components/layout/Body";
import { Divider } from "@rneui/base";
import DangerZone from "../components/setting/DangerZone";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import ReProfile from "../components/setting/ReProfile";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const SettingPage = () => {
  const dispatch = useDispatch();
  const notif = useSelector((state) => state.notif);
  const navigate = useNavigation();
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Badges" },
    { key: "second", title: "STATS" },
  ]);
  const handelPress = () => {
    dispatch(setIsActive());
  };
  return (
    <>
      {/* <Setting></Setting> */}
      <>
        <Appbar.Header style={{ backgroundColor: "#f5f3ff" }}>
          <Appbar.BackAction
            onPress={() => {
              navigate.pop();
            }}
          />
          <Appbar.Content title="Hello" />
          <Appbar.Action icon="wrench" onPress={() => {
            
          }} />
        </Appbar.Header>
          <ReProfile edit={true} />
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
        {/* <Body>
          <ScrollView>
            <View
              style={{
                marginBottom: 30,
                borderColor: "black",
                borderWidth: 2,
                padding: 8,
                borderRadius: 16,
              }}
            >
              <Profile edit={true} />
            </View>
            <Text variant="h6" style={{ marginBottom: 18 }}>
              General Settings
            </Text>
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
            <Divider style={{ marginBottom: 10 }} />
            <ListItem
              onPress={() => handelPress()}
              title="Notification"
              secondaryText="Daily Exercice Reminder"
            ></ListItem>
            <Divider style={{ marginBottom: 30 }} />
            <DangerZone />
          </ScrollView>
        </Body> */}
      </>
    </>
  );
};

export default SettingPage;
