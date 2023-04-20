import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";
import trophyImg from "../../assets/award.png";

const Achievements = () => {
  const { trophy } = useSelector((state) => state.user);
  let sum = 0;
  for (let i in trophy) {
    const element = trophy[i];
    sum += element;
  }

  return (
    <View style={{ marginBottom: 40, gap: 15 }}>
      <View>
        <Text style={styles.Header}>Trophées</Text>
        <Text style={styles.subHeader}>
        La somme des trophées pour toutes les catégories
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 50,
        }}
      >
        <Text style={styles.num}>x{sum}</Text>
        <Image style={styles.img} source={trophyImg}></Image>
      </View>
    </View>
  );
};

export default Achievements;

const styles = StyleSheet.create({
  Header: {
    fontSize: 17,
    color: "#495057",
    fontWeight: "500",
    letterSpacing: 0.8,
  },
  subHeader: {
    fontSize: 15,
    color: "#495057",
    fontWeight: "300",
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
