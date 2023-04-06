import {
  View,
  Text,
  StyleSheet,
  NativeModules,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Subject from "./Subject";
import { Button } from "@rneui/base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../store/userSlice";
import boy from "../../assets/boy.png";
import girl from "../../assets/girl.png";
import { Ionicons } from "@expo/vector-icons";
import Header from "./Header";
import data from "../../data/data";
import { ScrollView } from "react-native";

const Content = ({ user }) => {
  // const { data } = useSelector((state) => state.quiz);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <>
      <Header user={user}></Header>
      <ScrollView>
        <View style={styles.subjects}>
          {data.map((sbj, i) => (
            <Subject key={i} slug={sbj.category} subject={sbj.slug} />
          ))}
        </View>
      </ScrollView>
      {/* <View style={styles.subjects}>
        {data.map((sbj, i) => (
          <Subject key={i} slug={sbj.sbj} subject={sbj.slug} />
        ))}
      </View> */}
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
