import { useNavigation } from "@react-navigation/native";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";
import schoolCard from "../../assets/schoolCard.png";
import { ImageBackground } from "react-native";
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
      <ImageBackground
        source={props.bgCard}
        resizeMode="cover"
        imageStyle={{ borderRadius: 8 }}
        style={{ height: "100%", width: "100%" }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 150, width: 150, position: "absolute", top: -50 }}
            source={props.iconImg}
          ></Image>
        </View>
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <Text style={styles.subText}>{props.subject}</Text>
        </View>
        <TouchableOpacity
          style={{
            height: 70,
            width: 140,
            position: "absolute",
            bottom: 10,
            right: 10,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
          }}
          onPress={() =>
            // console.log(trophy[props.slug])
            navigation.navigate("quiz", { id: props.slug })
          }
        >
          <Text style={{ fontSize: 20, fontWeight: "900" }}>Start</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Subject;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
    width: "100%",
    height: hp("30%"),
    borderRadius: 8,
    borderBottomWidth: 7,
    flexDirection: "row",
    aspectRatio: 3 / 2,
  },

  subText: {
    position: "absolute",
    alignSelf: "center",
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
