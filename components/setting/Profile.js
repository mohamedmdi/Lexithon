import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "../home/Avatar";
import { useSelector } from "react-redux";

const Profile = () => {
  const { gender, grade, username } = useSelector((state) => state.user);

  return (
    <View style={{ flexDirection: "row", gap: 15, marginBottom: 40 }}>
      <Avatar gender={gender} clickable={false}></Avatar>
      <View style={{ justifyContent: "space-around" }}>
        <Text style={styles.name}>{username}</Text>
        <Text style={styles.grade}>{`${grade} Grade Student`}</Text>
      </View>
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
