import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import useBackHandler from "../hooks/useBackHandler";
import { Audio } from "expo-av";

const Quiz = (props) => {
  const [sound, setSound] = useState();

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/test.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  };

  return (
    <View style={styles.sub}>
      <Text>Hi {props.route.params.id}</Text>
      <View style={styles.container}>
        <Text style={styles.text}>Appuyez pour jouer le son</Text>
        <TouchableOpacity onPress={playSound}>
          <Text style={styles.button}>Jouer le son</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  sub: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 26,
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: "50%",
    borderRadius: 8,
    borderColor: "#7c3aed",
    borderWidth: 1,
    borderBottomWidth: 4,
  },

  subText: {
    alignSelf: "center",
    marginTop: 26,
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
  },

  trophy: {
    width: 30,
    height: 30,
  },

  numTrophy: {
    fontSize: 20,
    fontWeight: "700",
    color: "#7c3aed",
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
