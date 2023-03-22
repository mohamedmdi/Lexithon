import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import useBackHandler from "../../hooks/useBackHandler";
import Subject from "./Subject";
import Body from "../layout/Body";
import { addUser } from "../../store/userSlice";
import getData from "../../util/getData";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  // Reusable hook for backhandler feature!
  useBackHandler();
  const navigation = useNavigation();

  useEffect(() => {
    if (user?.username) return;

    (async () => {
      const data = await getData();
      setUser(data);
      dispatch(addUser({ ...data }));
    })();
  }, [user?.username]);

  return (
    <Body statusBarColor="#f5f3ff">
      <Text style={styles.h1}>Welcome {user?.username}</Text>
      <View style={styles.subjects}>
        <View style={styles.subjectsContainer}>
          <Subject slug="ar" subject="Arabic"></Subject>
          <Subject slug="fr" subject="French"></Subject>
        </View>
        <View style={styles.subjectsContainer}>
          <Subject slug="ma" subject="Math"></Subject>
        </View>
      </View>
      <Button
        style={{ backgroundColor: "#7c3aed", zIndex: -1 }}
        mode="contained"
        onPress={async () => {
          await AsyncStorage.clear();
          navigation.navigate("signup");
        }}
      >
        Clear Data
      </Button>
    </Body>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 50,
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#f5f3ff",
  },

  subjects: {
    padding: 5,
    // flex: 1,
    gap: 20,
  },

  subjectsContainer: {
    flexDirection: "row",
    gap: 10,
  },

  h1: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "#7c3aed",
    marginBottom: 30,
  },
});
