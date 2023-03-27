import { View, Text, StyleSheet, NativeModules } from "react-native";
import Subject from "./Subject";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../store/userSlice";
import getData from "../../util/getData";

const Content = ({ user }) => {
  const { data } = useSelector((state) => state.quiz);
  const xuser = useSelector(state=> state.user)
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <>
      <Text style={styles.h1}>Welcome {user.username}</Text>
      <View style={styles.subjects}>
        {data.map((sbj, i) => (
          <Subject key={i} slug={sbj.sbj} subject={sbj.slug} />
        ))}
      </View>
      <Button
        style={{ backgroundColor: "#7c3aed", zIndex: -1 }}
        mode="contained"
        onPress={async () => {
          await AsyncStorage.clear();
          dispatch(clearUser());
          navigation.navigate("signup");
        }}
      >
        Clear Data
      </Button>
    </>
  );
};

export default Content;

const styles = StyleSheet.create({
  subjects: {
    padding: 5,
    gap: 20,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  h1: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "#7c3aed",
    marginBottom: 30,
  },
});
