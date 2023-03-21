import { Image, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import volume from "../../assets/volume.png"

const Quiz = (props) => {

  return (
    <>
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.imgContainer}>
          <Image source={volume} style={{tintColor: "#f5f3ff", width: 30, height: 30}}></Image>
        </Pressable>
        <Text>Hi {props.route.params.id}</Text>
      </View>
    </View>
    </>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#f5f3ff",
    height: "100%",
  },

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
    padding: 8
  }
});
