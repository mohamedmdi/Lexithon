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
        {props.isCorrect ? "Correct" : "Incorrect"}
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
        {props.isCorrect ? "Next" : "Back Home"}
      </Button>
    </View>
  );
};

export default AnswerStateModal;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#ddd6fe",
    width: "100%",
    bottom: 0,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    gap: 20,
  },

  txt: {
    fontSize: 26,
    fontWeight: "900",
    alignSelf: "center",
    letterSpacing: 0.8,
  },
});
