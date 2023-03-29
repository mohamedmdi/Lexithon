import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import heart from "../../assets/heart.png";
import brokenHeart from "../../assets/broken-heart.png";

const UpperBar = ({ quiz }) => {
  return (
    <View style={styles.c}>
      <View style={styles.f}>
        {[1, 2].map((el, i) => (
          <Image
            style={styles.b}
            key={i}
            source={i + 1 <= quiz.HP ? heart : brokenHeart}
          ></Image>
        ))}
      </View>
      <ProgressBar
        style={styles.bar}
        progress={quiz.currentIteration / 3}
        color="#7c3aed"
      />
    </View>
  );
};

export default UpperBar;
const styles = StyleSheet.create({
  c: {
    flex: 1,
    width: "100%",
    // flexDirection: "row",
    marginBottom: 10,
  },
  f: {
    flex: 1,
    // flexDirection: "row",
    // gap: -13,
    // width: "10%",
    backgroundColor: "red",
  },

  b: {
    width: "20%",
    height: "20%",
    backgroundColor: "black",
  },
  bar: {
    // width: "80%",
  },
});
