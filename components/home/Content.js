import {
  View,
  Text,
  StyleSheet,
  NativeModules,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Subject from "./Subject";
import { Button } from "@rneui/base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../store/userSlice";
import boy from "../../assets/boy.png";
import girl from "../../assets/girl.png";
import { Ionicons } from "@expo/vector-icons";
import data from "../../data/data";

const Content = ({ user }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: hp(2),
          alignItems: "center",
          padding: hp(1),
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: hp(2), alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("setting")}
            style={{
              borderColor: "black",
              borderWidth: hp(0.2),
              borderRadius: hp(1.2),
              alignItems: "center",
              justifyContent: "center",
              padding: hp(1.2),
              backgroundColor: "rgba(124, 58, 237, 0.8)",
            }}
          >
            <Image
              source={user.gender === "male" ? boy : girl}
              style={{
                width: hp(4),
                height: hp(4),
              }}
            ></Image>
          </TouchableOpacity>
          <View style={{ flexDirection: "column", marginRight: hp(2) }}>
            <Text>Bienvenue</Text>
            <Text style={styles.h1}>{user.username}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("setting")}>
          {/* <Ionicons name="settings-outline" size={32} color="#7c3aed" /> */}
          <Ionicons name="menu" size={hp(5)} color="#7c3aed" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingTop: hp(6) }}>
          <View style={styles.subjects}>
            {data.map((sbj, i) => (
              <Subject
                key={i}
                slug={sbj.category}
                subject={sbj.slug}
                iconImg={sbj.stickerImg}
                bgcolor={sbj.bgcolor}
                bgCard={sbj.bgCard}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Content;

const styles = StyleSheet.create({
  subjects: {
    padding: hp("0.5%"),
    gap: hp("7%"),
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  h1: {
    fontWeight: "bold",
    fontSize: hp("4"),
    color: "#7c3aed",
    marginRight: "auto",
  },
});
