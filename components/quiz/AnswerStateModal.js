import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const AnswerStateModal = (props) => {
  return (
    <View style={styles.container}>
      <Text
        style={
          props.isCorrect
            ? { ...styles.txt, color: "#16a34a" }
            : { ...styles.txt, color: "#dc2626" }
        }
      >
        {props.isCorrect
          ? "Correct"
          : !props.isCorrect && props.isOver
          ? "timeout"
          : "incorrect"}
      </Text>
      <Button
        style={{
          backgroundColor: "#7c3aed",
          backgroundColor: "#7c3aed",
          borderBottomWidth: 4,
          borderColor: "#6d28d9",
        }}
        mode="contained"
        onPress={props.nextAnswerHandler}
      >
        Continue
      </Button>
    </View>
  );
};

export default AnswerStateModal;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#ddd6fe",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    gap: 20,
  },

  txt: {
    fontSize: 26,
    fontWeight: "900",
    alignSelf: "center",
    letterSpacing: 0.8,
  },
});
