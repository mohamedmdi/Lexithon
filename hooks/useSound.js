import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";

const useSound = () => {
  const [sound, setSound] = useState();

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/test.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  });
};

export default useSound;
