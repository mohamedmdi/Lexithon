import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { updateUserInfo } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const NavBar = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { updatedUser, username, grade, gender } = useSelector(
    (state) => state.user
  );

  const editInfoHandler = () => {
    // if (updatedUser.username && updatedUser.username !== username) {
    //   dispatch(updateUserInfo(updatedUser));
    //   navigation.navigate("home");

    //   return;
    // }

    // if (updatedUser.gender && updatedUser.gender !== gender) {
    //   dispatch(updateUserInfo(updatedUser));
    //   navigation.navigate("home");

    //   return;
    // }

    // if (updatedUser.grade && updatedUser.grade !== grade) {
    //   dispatch(updateUserInfo(updatedUser));
    //   navigation.navigate("home");

    //   return;
    // }
    // return;

    props.handleSave();
  };

  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Ionicons name="close" size={35} color="#495057" />
      </TouchableOpacity>
      <Text style={styles.p}>Profile</Text>
      <TouchableOpacity onPress={editInfoHandler}>
        <Text style={styles.btn}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  p: {
    fontSize: 19,
    color: "#495057",
  },

  btn: {
    fontSize: 19,
    fontWeight: "900",
    color: "#7c3aed",
  },

  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
});
