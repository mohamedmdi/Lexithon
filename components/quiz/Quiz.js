import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Body from "../layout/Body";
import CardPressable from "../layout/CardPressable";
import volume from "../../assets/volume.png";
import { Button } from "react-native-paper";
import img from "../../assets/award.png"

const Quiz = (props) => {
  return (
    <>
      <Body statusBarColor="#f5f3ff">
        <View style={styles.main}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => console.log("PRESSED")}
              style={styles.imgContainer}
            >
              <Image
                source={volume}
                style={{ tintColor: "#f5f3ff", width: 30, height: 30 }}
              />
            </TouchableOpacity>
            {/* <Text>Hi {props.route.params.id}</Text> */}
            <Text style={styles.word}>L' orange</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.quizWrapper}>
              <CardPressable style={{padding: 0}}>
                <Image style={styles.img} source={img}></Image>
              </CardPressable>
              <CardPressable style={{padding: 0}}>
                <Text>Body</Text>
              </CardPressable>
            </View>
            <View style={styles.quizWrapper}>
              <CardPressable style={{padding: 0}}>
                <Text>Body</Text>
              </CardPressable>
              <CardPressable style={{padding: 0}}>
                <Text>Body</Text>
              </CardPressable>
            </View>
          </View>
          <Button
            style={{
              backgroundColor: "#7c3aed",
              backgroundColor: "#7c3aed",
              borderBottomWidth: 4,
              borderColor: "#6d28d9",
              
            }}
            mode="contained"
            onPress={() => {}}
          >
            Check{" "}
          </Button>
        </View>
      </Body>
    </>
  );
};

export default Quiz;

const styles = StyleSheet.create({

  main: {
    display: "flex",
    height: "100%",
    gap: 20,
  },

  header: {
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "flex-start",
    
  },

  imgContainer: {
    backgroundColor: "#7c3aed",
    borderBottomWidth: 4,
    borderColor: "#6d28d9",
    borderRadius: 15,
    padding: 8,
  },

  img: {
    width: "50%",
    height: "50%",
  },

  body: {
    padding: 5,
    flex: 1,
    gap: 20,

  },

  quizWrapper: {
    flexDirection: "row",
    flex: 1,
    gap: 10,
  },

  word: {
    paddingBottom: 2,
    borderBottomWidth: 2,
    borderColor: "#7c3aed",
    borderStyle: "dotted",
    fontSize: 18,
    fontWeight: "600",
    color: "#7c3aed",
    alignSelf: "center",
  },
});
