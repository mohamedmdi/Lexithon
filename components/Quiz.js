import { Image, StyleSheet, Text, View } from "react-native";
import useBackHandler from "../hooks/useBackHandler";

const Quiz = (props) => {

  return (
    <View style={styles.sub}>
        <Text>Hi {props.route.params.id}</Text>
    </View>
  );
};

export default Quiz;

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
