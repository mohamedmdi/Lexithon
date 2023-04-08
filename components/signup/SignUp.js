import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Touchable,
  Pressable,
} from "react-native";

import { TextInput, Button } from "react-native-paper";
import DropDown from "./DropDown";
import Gender from "./Gender";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import storeData from "../../util/storeData";

const SignUp = (props) => {
  const [text, setText] = useState("");
  const [gender, setGender] = useState(null);
  const [grade, setGrade] = useState(null);
  const navigation = useNavigation();
  const { trophy } = useSelector((state) => state.user);

  const addGender = (val) => setGender(val);
  const addGrade = (val) => setGrade(val);

  useFocusEffect(
    useCallback(() => {
      console.log("re-rendered");
    }, [props.navigation])
  );

  const submitHandler = async () => {
    if (text && grade && gender) {
      // await AsyncStorage.clear()
      await storeData({ username: text, grade, trophy, gender });

      // Go Next Page After Creating an acc!

      navigation.navigate("home");
    }
    return true;
  };
  return (
    <>
      <Text style={styles.h1}>Welcome to Lexithon</Text>
      <View style={styles.form}>
        <View>
          <Gender setGender={setGender} />
          <TextInput
            mode="outlined"
            label="Name"
            placeholder="Your Name"
            onChangeText={setText}
            style={{ backgroundColor: "white" }}
          />
        </View>
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
  },
});
