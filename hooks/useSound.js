import { useState, useEffect } from "react";
import { Audio } from "expo-av";

const useSound = (audio) => {
  const [sound, setSound] = useState();

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(audio);
    setSound(sound);
    await sound.playAsync();
  });
};

export default useSound;
