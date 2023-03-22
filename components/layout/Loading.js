import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

import getData from "../../util/getData";
import Body from "./Body";

const Loading = (props) => {
  const user = useSelector((state) => state.user);
  const navigation = useNavigation();

  useEffect(() => {
    if (user.username) return;

    (async () => {
      const dataa = await getData();
      dataa ? navigation.navigate("home") : navigation.navigate("signup");
    })();
  }, []);

  return (
    <Body container={styles.container} statusBarColor="#7c3aed">
      <Text style={styles.h1}>Lexithon</Text>
    </Body>
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