import { useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import DropDown from "./DropDown";
import Gender from "./Gender";
import storeData from "../../util/storeData";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";

const SignUp = (props) => {
  const [text, setText] = useState("");
  const [gender, setGender] = useState(null);
  const [grade, setGrade] = useState(null);
  const navigation = useNavigation();

  const addGender = (val) => setGender(val);
  const addGrade = (val) => setGrade(val);

  useFocusEffect(
    useCallback(() => {
      console.log("re-rendered");
    }, [props.navigation])
  );

  const submitHandler = async () => {
    if (!text || !grade || !gender) return;

    // await AsyncStorage.clear()
    await storeData({
      username: text,
      grade,
      gender,
      trophy: {
        school: 0,
        home: 0,
        kitchen: 0,
        animals: 0,
        body: 0,
        sport: 0,
      },
    });

    // Go Next Page After Creating an acc!
    navigation.navigate("home");
  };
  return (
    <>
      <Text style={styles.h1}>Welcome To The Game</Text>
      <View style={styles.form}>
        <Gender addGender={addGender} />
        <TextInput
          mode="outlined"
          label="Name"
          placeholder="Your Name"
          onChangeText={setText}
        />
        <DropDown addGrade={addGrade} />
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
