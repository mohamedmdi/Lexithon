import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { updateUserInfo } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import save from "../../assets/save.png";

const NavBar = (props) => {
  const navigation = useNavigation();

  const editInfoHandler = () => {
    props.handleSave();
  };

  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Ionicons name="close" size={35} color="#495057" />
      </TouchableOpacity>
      <Text style={styles.p}>Profil</Text>
      <TouchableOpacity onPress={editInfoHandler}>
        <Image source={save} style={{ height: 35, width: 35 }} />
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
