import { Image, StyleSheet, Text, View } from "react-native";
import Body from "../layout/Body";
import CardPressable from "../layout/CardPressable";
import volume from "../../assets/volume.png";

const Quiz = (props) => {
  return (
    <>
      <Body statusBarColor="#f5f3ff">
        <View style={styles.header}>
          <CardPressable
            onPress={() => console.log("PRESSED")}
            style={styles.imgContainer}
          >
            <Image
              source={volume}
              style={{ tintColor: "#f5f3ff", width: 30, height: 30 }}
            ></Image>
          </CardPressable>
          <Text>Hi {props.route.params.id}</Text>
        </View>
      </Body>
    </>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },

  imgContainer: {
    backgroundColor: "#7c3aed",
    borderBottomWidth: 4,
    borderColor: "#6d28d9",

    borderRadius: 15,
    padding: 8,
  },
});
