import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const AnswerStateModal = ({
  clickedAnswer,
  isCorrect,
  checkAnswerHandler,
  nextAnswerHandler,
  isOver,
}) => {
  return (
    <>
      {isCorrect === null && !isOver ? (
        <TouchableOpacity
          disabled={clickedAnswer ? false : true}
          style={{
            position: "absolute",
            backgroundColor: clickedAnswer ? "#7c3aed" : "#AFAFAF",
            borderBottomWidth: clickedAnswer ? 4 : 0,
            borderColor: "#6d28d9",
            width: hp(40),
            height: hp(8),
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={checkAnswerHandler}
        >
          <Text
            style={{
              color: clickedAnswer ? "#FFF" : "#fffffd",
              fontSize: hp(2.6),
              fontWeight: 700,
            }}
          >
            VERIFIER
          </Text>
        </TouchableOpacity>
      ) : (
        <>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              margin: 0,
              height: hp(20),
              backgroundColor: isCorrect ? "#D7FFB8" : "#ffdfe0",
              justifyContent: "flex-start",
              padding: hp(2),
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: hp(3),
                fontWeight: "900",
                letterSpacing: 0.8,
                textAlign: "center",
                color: isCorrect ? "#57CC02" : "#FF4B4C",
              }}
            >
              {isCorrect ? "Correcte" : "Incorrecte"}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: isCorrect ? "#57CC02" : "#FF4B4C",
              borderBottomWidth: 4,
              borderColor: isCorrect ? "#50BB02" : "#DB4B4C",
              width: hp(40),
              height: hp(8),
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={nextAnswerHandler}
          >
            <Text style={{ color: "#fff", fontSize: hp(2.6), fontWeight: 700 }}>
              CONTINUER
            </Text>
          </TouchableOpacity>
        </>
      )}
    </>
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    gap: 20,
  },

  txt: {
    fontSize: 26,
    fontWeight: "900",
    alignSelf: "center",
    letterSpacing: 0.8,
  },
});
