import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Avatar from "../home/Avatar";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const { gender, grade, username } = useSelector((state) => state.user);
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 15,
        marginBottom: 40,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 15,
        }}
      >
        <Avatar gender={gender} clickable={true}></Avatar>
        <View style={{ justifyContent: "space-around" }}>
          <Text style={styles.name}>{username}</Text>
          <Text style={styles.grade}>{`${grade}`}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("profile")}>
        <FontAwesome5 name="user-edit" size={24} color="#7c3aed" />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#7c3aed",
  },

  grade: {
    fontSize: 17,
    color: "#495057",
    opacity: 0.8,
  },
});
