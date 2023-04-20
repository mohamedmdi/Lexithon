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
import award from "../assets/award.png";

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
  console.log(data.map((el) => ({ ...el, trophy: trophy[el.category] }))[0]);
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#f5f3ff" }}>
        <Appbar.BackAction
          onPress={() => {
            navigate.pop();
          }}
        />
      </Appbar.Header>
      <ReProfile edit={true} />
      <View
        style={{
          flex: 2,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: "#7c3aed",
        }}
      >
        <View
          style={{
            gap: 10,
            height: "15%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 30,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500", color: "#f5f3ff" }}>
            Classement
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "500", color: "#f5f3ff" }}>
            Trophees
          </Text>
        </View>
        <View
          style={{
            height: "85%",
            backgroundColor: "#f5f3ff",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 15,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {data
              .map((el) => ({ ...el, trophy: trophy[el.category] }))
              .sort((a, b) => b.trophy - a.trophy)
              .map((el, i) => (
                <View
                  key={i}
                  style={{
                    gap: 10,
                    borderBottomColor: "#7c3aed",
                    borderBottomWidth: 0.5,
                    paddingVertical: 25,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 20,
                  }}
                >
                  <View
                    style={{
                      width: "75%",
                      gap: 10,
                      flexDirection: "row",
                      alignItems: "center",
                      // justifyContent: "space-between",
                    }}
                  >
                    <Image
                      source={el.iconImg}
                      style={{ height: 45, width: 45 }}
                    />
                    <Text
                      style={{
                        width: "80%",
                        fontWeight: "400",
                        fontSize: 20,
                        color: "#575772",
                        overflow: "hidden",
                      }}
                    >
                      {el.slug}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "25%",
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={award}
                      style={{
                        height: 35,
                        width: 35,
                      }}
                    />
                    <Text
                      style={{
                        color: "#575772",
                        fontWeight: "bold",
                        fontSize: 32,
                      }}
                    >
                      {el.trophy}
                    </Text>
                  </View>
                </View>
              ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default SettingPage;
