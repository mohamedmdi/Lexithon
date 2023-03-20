import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { StatusBar } from "expo-status-bar";
import useBackHandler from "../hooks/useBackHandler";
import getData from "../util/getData";
import trophy from "../assets/award.png";

const subjects = [
  {
    id: 1,
    title: "Arabic",
  },
  {
    id: 2,
    title: "French",
  },
  {
    id: 3,
    title: "Math",
  },
];

const Home = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  // Reusable hook for backhandler feature!
  useBackHandler();

  useEffect(() => {
    if (user?.username) return;

    (async () => {
      const data = await getData();
      setUser(data);
      dispatch(addUser({ ...data }));
    })();
  }, [user?.username]);

  return (
    <>
      <StatusBar backgroundColor="#f5f3ff" barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.h1}>Welcome {user?.username}</Text>
        <View style={styles.subjects}>
          <View style={styles.subjectsContainer}>
            <View style={styles.sub}>
              <Text style={styles.subText}>Arabic</Text>
              <Text style={styles.numTrophy}>
                <Image style={styles.trophy} source={trophy}></Image> 0
              </Text>
            </View>
            <View style={styles.sub}>
              <Text style={styles.subText}>French</Text>
              <Text style={styles.numTrophy}>
                {" "}
                <Image style={styles.trophy} source={trophy}></Image> 0
              </Text>
            </View>
          </View>
          <View style={styles.subjectsContainer}>
            <View style={styles.sub}>
              <Text style={styles.subText}>Math</Text>
              <Text style={styles.numTrophy}>
                {" "}
                <Image style={styles.trophy} source={trophy}></Image> 0
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
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

  h1: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "#7c3aed",
    marginBottom: 30,
  },
});
