
import { StyleSheet, Text, View, ImageBackground, StatusBar } from "react-native";

const Loading= (props) => {

  return (

      <View style={styles.imgContainer}>
        <Text>Loading</Text>
      </View>

    
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 50,
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#f5f3ff",
  },

  form: {
    display: "flex",
    gap: 14,
    marginBottom: 32,
  },

  h1: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "#7c3aed",
    marginBottom: 30,
  },

  imgContainer: {
    width: "auto",
    height: 225,
    overflow: "hidden",
    borderBottomLeftRadius: 52,
  },
});
