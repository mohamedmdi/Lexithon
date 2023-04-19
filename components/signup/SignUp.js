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
  Image,
} from "react-native";
import logo from "../../assets/imgs/logo-maroc.png";
import imgSignup from "../../assets/imgs/img-signup.png";

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
  const [errors, setErrors] = useState({
    gender: false,
    name: false,
    grade: false,
  });

  const addGender = (val) => setGender(val);
  const addGrade = (val) => setGrade(val);

  useFocusEffect(
    useCallback(() => {
      console.log("re-rendered");
    }, [props.navigation])
  );

  const submitHandler = async () => {
    console.log(errors);
    if (!gender) {
      setErrors((prev) => ({ ...prev, gender: true }));
    }

    if (!grade) {
      setErrors((prev) => ({ ...prev, grade: true }));
    }

    if (!text) {
      setErrors((prev) => ({ ...prev, name: true }));
    }

    if (text && grade && gender) {
      // await AsyncStorage.clear()
      await storeData({ username: text, grade, trophy, gender });

      // Go Next Page After Creating an acc!

      navigation.navigate("home");
    }
    return true;
  };
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "space-between",
        paddingVertical: 40,
        paddingTop: 10,
      }}
    >
      <View>
        <Image
          source={logo}
          style={{
            width: 120,
            height: 120,
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: 25,
          }}
        ></Image>

        <Text style={styles.h1}>
          M<Text style={{ color: "#f3cf26" }}>o</Text>n Vo
          <Text style={{ color: "#761cd4" }}>c</Text>abulai
          <Text style={{ color: "#d5297f" }}>r</Text>e
        </Text>
      </View>
      <View>
        <View style={styles.form}>
          <View style={{ gap: 4 }}>
            <Gender
              setGenderError={setErrors}
              setGender={setGender}
              errorGender={errors.gender}
            />

            <Text style={{ ...styles.label, ...styles.errorLabel }}>
              {errors.gender ? "You must choose your gender" : null}
            </Text>
          </View>
          <View style={{ gap: 3 }}>
            <Text style={styles.label}>Name</Text>

            <TextInput
              mode="outlined"
              // label="Name"
              placeholder="Your Name"
              onChangeText={(val) => {
                setText(val);
                setErrors((prev) => ({ ...prev, name: false }));
              }}
              style={{ backgroundColor: "white" }}
            />

            <Text style={{ ...styles.label, ...styles.errorLabel }}>
              {errors.name ? "You must enter your name" : null}
            </Text>
          </View>
          <View style={{ gap: 3 }}>
            <Text style={styles.label}>Grade</Text>
            <DropDown addGrade={addGrade} setGradeError={setErrors} />

            <Text style={{ ...styles.label, ...styles.errorLabel }}>
              {errors.grade ? "You must choose your grade" : null}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#7c3aed",
            borderBottomWidth: 6,
            borderColor: "#7034d5",
            paddingVertical: 16,
            borderRadius: 50,
          }}
          onPress={submitHandler}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Let's Go
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Image
        source={imgSignup}
        style={{
          width: 120,
          height: 120,
          marginRight: "auto",
          marginLeft: "auto",
        }}
      ></Image> */}
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  form: {
    display: "flex",
    gap: 10,
    marginBottom: 40,
  },

  h1: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: "#333",
    // marginBottom: 50,
  },

  label: {
    fontSize: 16,
    color: "#5b21b6",
  },

  error: {
    borderColor: "red",
  },

  errorLabel: {
    color: "red",
    
  },
});
