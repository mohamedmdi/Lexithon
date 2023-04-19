import { ListItem, Switch, Text } from "@react-native-material/core";
import Setting from "../components/setting/Setting";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, ScrollView, View } from "react-native";
import Profile from "../components/setting/Profile";
import Body from "../components/layout/Body";
import { Divider } from "@rneui/base";
import DangerZone from "../components/setting/DangerZone";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import ReProfile from "../components/setting/ReProfile";

// const FirstRoute = () => {
//   const { data } = useSelector((state) => state.quiz);
//   console.log(data[0].slug);
//   console.log(data.length);

//   return (

//   );
// };

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}>
    <Text>test</Text>
  </View>
);

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });

const SettingPage = () => {
  const { trophy } = useSelector((state) => state.user);
  const { data } = useSelector((state) => state.quiz);
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
      <Appbar.Header style={{ backgroundColor: "#f5f3ff" }}>
        <Appbar.BackAction
          onPress={() => {
            navigate.pop();
          }}
        />
        <Appbar.Content title="Hello" />
      </Appbar.Header>
      <ReProfile edit={true} />
      <View
        style={{
          flex: 2,
          backgroundColor: "#7c3aed",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 15,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((el, i) => (
            <View
              key={i}
              style={{
                gap: 25,
                borderBottomColor: "#f5f3ff",
                borderBottomWidth: 0.5,
                paddingVertical: 30,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image source={el.iconImg} style={{ height: 50, width: 50 }} />
              <Text
                style={{ fontWeight: "bold", fontSize: 25, color: "#f5f3ff" }}
              >
                {el.slug}
              </Text>
              <Text
                style={{ color: "#f5f3ff", fontWeight: "bold", fontSize: 32 }}
              >
                {trophy[el.category]}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default SettingPage;
