import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Avatar from "../home/Avatar";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import NavBar from "./NavBar";

const ReProfile = ({ edit }) => {
  const { gender, grade, username } = useSelector((state) => state.user);
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        // backgroundColor: "red",
        flex: 1,
        gap: 20,
        padding: 25,
      }}
    >
      
      <View
        style={{
          flexDirection: "column",
          gap: 5,
          // alignItems: "center"
        }}
      >
        <Avatar gender={gender} clickable={true} imgSize={80}></Avatar>
        <View style={{ justifyContent: "space-around", alignItems: "center" }}>
          <Text style={styles.name}>{username}</Text>
          <Text style={styles.grade}>{`${grade}`}</Text>
        </View>
      </View>
      {edit && (
        <Button mode="outlined" onPress={() => navigation.navigate("profile")}>
          Edit Profile
        </Button>
      )}
    </View>
  );
};

export default ReProfile;

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
