import { useNavigation } from "@react-navigation/native";
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";
import trophyImg from "../../assets/award.png";

const Subject = (props) => {
  const navigation = useNavigation();
  const { trophy } = useSelector((state) => state.user);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("quiz", { id: props.slug })}
    >
      <View
        style={{
          width: "55%",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text style={styles.subText}>{props.subject}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image style={styles.trophy} source={trophyImg}></Image>
        <Text style={styles.numTrophy}>{trophy}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Subject;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
    padding: hp("1%"),
    width: "100%",
    borderRadius: 8,
    borderColor: "#7c3aed",
    borderWidth: 1,
    borderBottomWidth: 4,
    flexDirection: "row",
  },

  subText: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    fontSize: hp("3.6%"),
  },

  trophy: {
    width: hp("5%"),
    height: hp("5%"),
  },

  numTrophy: {
    fontSize: hp("3%"),
    fontWeight: "500",
    color: "#7c3aed",
  },
});
