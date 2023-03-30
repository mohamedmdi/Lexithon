import { useState } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import DropDown from "./DropDown";
import Gender from "./Gender";
import storeData from "../../util/storeData";
import { useNavigation } from "@react-navigation/native";

const SignUp = (props) => {
  const [text, setText] = useState("");
  const navigation = useNavigation();
  const { grade, achievements, gender } = useSelector((state) => state.user);

  const submitHandler = async () => {
    // await AsyncStorage.clear()
    await storeData({ username: text, grade, achievements, gender });

    // Go Next Page After Creating an acc!
    navigation.navigate("home");
  };
  return (
    <>
      <Text style={styles.h1}>Welcome To The Game</Text>
      <View style={styles.form}>
        <Gender />
        <TextInput
          mode="outlined"
          label="Name"
          placeholder="Your Name"
          onChangeText={setText}
        />
        <DropDown />
      </View>
      <Button
        style={{ backgroundColor: "#7c3aed", zIndex: -1 }}
        mode="contained"
        onPress={submitHandler}
      >
        Let's Go
      </Button>
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
});
