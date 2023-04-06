import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import getData from "../../utils/getData";
import Body from "./Body";
import { loadDataFromStorage } from "../../store/notifSlice";

const Loading = (props) => {
  const user = useSelector((state) => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch()

  useFocusEffect(() => {
    if (user.username) return;
    (async () => {
      dispatch(loadDataFromStorage());
      const dataa = await getData();
      dataa ? navigation.navigate("home") : navigation.navigate("signup");
    })();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Lexithon</Text>
    </View>
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
