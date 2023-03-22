import { TouchableOpacity, StyleSheet } from "react-native";

const CardPressable = (props) => {
  return (
    <TouchableOpacity
      style={{...styles.card, ...props.style}}
      onPress={props.onPress || null}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default CardPressable;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    // padding: 26,
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: "50%",
    borderRadius: 8,
    borderColor: "#7c3aed",
    borderWidth: 1,
    borderBottomWidth: 4,
  },
});
