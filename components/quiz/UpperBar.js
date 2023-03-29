import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import heart from "../../assets/imgs/filledHeart.png";
import brokenHeart from "../../assets/imgs/brokenHeart.png";

const UpperBar = ({ quiz }) => {
  return (
    <>
      <ProgressBar
        style={styles.bar}
        progress={quiz.currentIteration / 3}
        color="#7c3aed"
      />
      <View style={{display:"flex", flexDirection: "row", gap: 1}}>
        {[...Array(quiz.initialHP).keys()].map((el, i) => (
          <Image
          style={{ width: "10%", height: 30, resizeMode: "contain"  }}
            key={i}
            source={i + 1 <= quiz.HP ? heart : brokenHeart}
          ></Image>
        ))}
      </View>
    </>
  );
};

export default UpperBar;
const styles = StyleSheet.create({});
