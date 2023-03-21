import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text } from "react-native";
import CardPressable from "../layout/CardPressable";
import trophy from "../../assets/award.png";

const Subject = (props) => {
  const navigation = useNavigation();

  return (
    <CardPressable
      onPress={() => navigation.navigate("quiz", { id: props.slug })}
    >
      <Text style={styles.subText}>{props.subject}</Text>
      <Text style={styles.numTrophy}>
        <Image style={styles.trophy} source={trophy}></Image> 0
      </Text>
    </CardPressable>
  );
};

export default Subject;

const styles = StyleSheet.create({
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
