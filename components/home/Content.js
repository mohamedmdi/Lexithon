import {
  View,
  Text,
  StyleSheet,
  NativeModules,
  Image,
  TouchableOpacity,
} from "react-native";
import Subject from "./Subject";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../store/userSlice";
import boy from "../../assets/boy.png";
import girl from "../../assets/girl.png";
import { Ionicons } from "@expo/vector-icons";

const Content = ({ user }) => {
  const { data } = useSelector((state) => state.quiz);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 15,
          alignItems: "center",
          padding: 5,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("setting")}
          style={{
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            padding: 8,
            backgroundColor: "rgba(124, 58, 237, 0.8)",
          }}
        >
          <Image
            source={user.gender === "male" ? boy : girl}
            style={{
              width: 45,
              height: 45,
            }}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.h1}>{user.username}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("setting")}>
          <Ionicons name="settings-outline" size={32} color="#7c3aed" />
        </TouchableOpacity>
      </View>
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
    color: "#7c3aed",
    marginRight: "auto",
  },
});
