import { useNavigation } from "@react-navigation/native";
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import trophyImg from "../../assets/award.png";

const Subject = (props) => {
  const navigation = useNavigation();
  const {trophy} = useSelector(state => state.user)

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("quiz", { id: props.slug })}
    >
      <Text style={styles.subText}>{props.subject}</Text>
      <Text style={styles.numTrophy}>
        <Image style={styles.trophy} source={trophyImg}></Image> {trophy}
      </Text>
    </TouchableOpacity>
  );
};

export default Subject;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 26,
    width: "46.9%",
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
});
