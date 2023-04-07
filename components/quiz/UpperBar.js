import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import heart from "../../assets/imgs/filledHeart.png";
import brokenHeart from "../../assets/imgs/brokenHeart.png";

const UpperBar = ({ quiz }) => {
  return (
    <>
      <View style={{ gap: 6 }}>
        <ProgressBar
          style={styles.bar}
          progress={quiz.currentIteration / 3}
          color="#7c3aed"
        />
      </View>
    </>
  );
};

export default UpperBar;
const styles = StyleSheet.create({
  bar: {
    backgroundColor: "rgba(124,58,237, 0.3)",
    height: 15,
    borderRadius: 50,
  },
});
