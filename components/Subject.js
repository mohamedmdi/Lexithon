import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import {
  BackHandler,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import trophy from "../assets/award.png";
import useBackHandler from "../hooks/useBackHandler";

const Subject = (props) => {
    const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("quiz", {id: props.slug})} style={styles.sub}>
      <Text style={styles.subText}>{props.subject}</Text>
      <Text style={styles.numTrophy}>
        <Image style={styles.trophy} source={trophy}></Image> 0
      </Text>
    </Pressable>
  );
};

export default Subject;

const styles = StyleSheet.create({
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
});
