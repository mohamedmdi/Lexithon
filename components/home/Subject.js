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
  const hexColor = props.bgcolor.slice(1);
  let r = Math.max(0, parseInt(hexColor.slice(0, 2), 16) - 10);
  let g = Math.max(0, parseInt(hexColor.slice(2, 4), 16) - 10);
  let b = Math.max(0, parseInt(hexColor.slice(4, 6), 16) - 10);
  let dark = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  console.log("Sub: ", props.trophy);
  return (
    <View
      style={{
        borderColor: dark,
        backgroundColor: props.bgcolor,
        ...styles.container,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ height: 100, width: 100 }}
          source={props.iconImg}
        ></Image>
      </View>
      <View
        style={{
          width: "60%",
        }}
      >
        <Text style={styles.subText}>{props.subject}</Text>
      </View>
      <TouchableOpacity
        style={{
          height: 45,
          width: 100,
          position: "absolute",
          bottom: 20,
          right: 20,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
        }}
        onPress={() =>
          // console.log(trophy[props.slug])
          navigation.navigate("quiz", { id: props.slug })
        }
      >
        <Text style={{ fontSize: 20, fontWeight: "900" }}>Start</Text>
      </TouchableOpacity>
    </View>
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
    height: hp("30%"),
    borderRadius: 8,
    borderBottomWidth: 5,
    flexDirection: "row",
  },

  subText: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    fontSize: hp("3.6%"),
    color: "white",
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
