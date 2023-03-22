import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// prettier-ignore
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Touchable, Pressable } from "react-native";
import { TextInput, Button } from "react-native-paper";
import storeData from "../../util/storeData";
import Body from "../layout/Body";
import DropDown from "./DropDown";

const SignUp = (props) => {
  const [text, setText] = useState("");
  const { grade, achievements } = useSelector((state) => state.user);

  useBackHandler();

  const submitHandler = async () => {
    // await AsyncStorage.clear()
    await storeData({ username: text, grade, achievements });

    // Go Next Page After Creating an acc!

    props.navigation.navigate("home");
  };
  return (
    <>
      <View style={styles.imgContainer}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHNjaG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          }}
          style={{
            resizeMode: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <Body statusBarColor="#f5f3ff">
        <Text style={styles.h1}>Welcome To The Game</Text>
        <View style={styles.form}>
          <View>
            <TextInput
              mode="outlined"
              label="Name"
              placeholder="Your Name"
              onChangeText={setText}
            />
          </View>
          <DropDown />
        </View>
        <Button
          style={{ backgroundColor: "#7c3aed", zIndex: -1 }}
          mode="contained"
          onPress={submitHandler}
        >
          Let's Go
        </Button>
      </Body>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
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
