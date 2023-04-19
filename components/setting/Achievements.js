import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";
import trophyImg from "../../assets/award.png";

const Achievements = () => {
  const { trophy } = useSelector((state) => state.user);

  return (
    <View style={{ marginBottom: 40, gap: 15 }}>
      <Text style={styles.subHeader}>Trophées</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 50,
        }}
      >
        <Text style={styles.num}>x{trophy.school}</Text>
        <Image style={styles.img} source={trophyImg}></Image>
      </View>
    </View>
  );
};

export default Achievements;

const styles = StyleSheet.create({
  subHeader: {
    fontSize: 17,
    color: "#495057",
    fontWeight: "500",
    letterSpacing: 0.8,
  },

  num: {
    fontSize: 63,
    color: "#7c3aed",
    fontWeight: "bold",
  },

  img: {
    resizeMode: "cover",
    width: 130,
    height: 130,
  },
});
