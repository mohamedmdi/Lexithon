import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { Divider } from "@rneui/themed";
import Avatar from "../home/Avatar";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../signup/DropDown";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import Gender from "../signup/Gender";
import trophyImg from "../../assets/award.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearUser } from "../../store/userSlice";
import { useNavigation } from "@react-navigation/core";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { Button } from "@rneui/base";


const Setting = () => {
    const [text, setText] = useState("")
    const { gender, grade, username } = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const navigation = useNavigation()

  return (
    <>
      <View style={styles.nav}>
        <Ionicons name="close" size={35} color="#D7CDFE" />
        <Text style={styles.p}>Profile</Text>
        <TouchableOpacity>
          <Text style={styles.p}>Save</Text>
        </TouchableOpacity>
      </View>
      <Divider />
      <View style={{ flexDirection: "row", gap: 15, marginBottom: 22 }}>
        <Avatar gender={gender} clickable={false}></Avatar>
        <View style={{ justifyContent: "space-around" }}>
          <Text style={styles.p}>{username}</Text>
          <Text style={styles.p}>{`${grade} Grade Student`}</Text>
        </View>
      </View>
      <Text style={styles.subHeader}>content</Text>
      <View style={{gap: 20, marginBottom: 22}}>
        <TextInput
          mode="outlined"
        //   label="Name"
          placeholder="Your Name"
          onChangeText={setText}
          value={username}
        />
        <DropDown />
        <Gender></Gender>
      </View>
      <Divider />

      <Text style={styles.subHeader}>achievements</Text>
      <View style={{flexDirection: "row", alignItems:"center", justifyContent: "center", gap:50}}>
        <Text style={styles.num}>x5</Text>
        <Image style={styles.img} source={trophyImg}></Image>

      </View>
      <Divider />
      <Text style={styles.subHeader}>Danger Zone</Text>
      <Text style={{marginBottom: 100}}>Danger Zone</Text>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Delete Account"
          loading={false}
          loadingProps={{ size: "large", color: "white" }}
          buttonStyle={{
            backgroundColor: "rgba(111, 202, 186, 1)",
            borderRadius: 5,
            width: wp("88%"),
          }}
          titleStyle={{ fontWeight: "bold", fontSize: hp("3%") }}
          onPress={async () => {
            await AsyncStorage.clear();
            dispatch(clearUser());
            navigation.navigate("signup");
          }}
        />
      </View>


    </>
  );
};

export default Setting;

const styles = StyleSheet.create({
  p: {
    color: "#D7CDFE",
    fontSize: 19,
  },

  subHeader: {
    color: "#D7CDFE",
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0.8,
    opacity: 0.7,
  },

  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  num: {
    fontSize: 63,
    color: "#D7CDFE",
    fontWeight: "bold",
  },

  img: {
    resizeMode: "cover",
    width: 130,
    height: 130
  },
});
