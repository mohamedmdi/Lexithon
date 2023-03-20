import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
} from "react-native";

import getData from "../util/getData";

const Loading = (props) => {
  // const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const dataa = await getData();
      dataa ? navigation.navigate("home") : navigation.navigate("signup");
      setData(dataa);
    })();
  }, [data]);

  return (
    <>
      <StatusBar backgroundColor="#7c3aed" barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.h1}>Lexithon</Text>
      </View>
    </>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    backgroundColor: "#7c3aed",
  },

  h1: {
    fontSize: 42,
    fontWeight: "900",
    color: "#fff",
  },
});
