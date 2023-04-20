import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import logo from "../../assets/imgs/logo-maroc.png";
import monVoc from "../../assets/monVoc.png";

import { TextInput } from "react-native-paper";
import DropDown from "./DropDown";
import Gender from "./Gender";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
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
        paddingVertical: hp(8),
        paddingHorizontal : hp(1.5),
        paddingTop: hp(3),
        gap: hp(10),
      }}
    >
      <View style={{ height: "30%" }}>
        <Image
          source={logo}
          resizeMode="contain"
          style={{
            width: hp(30),
            height: hp(10),
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: hp(4),
          }}
        ></Image>
        <Image
          source={monVoc}
          resizeMode="contain"
          style={{
            width: hp(40),
            height: hp(15),
            marginRight: "auto",
            marginLeft: "auto",
          }}
        ></Image>
      </View>
      <View style={{ height: hp(40), gap: hp(2) }}>
        <View style={styles.form}>
          <View style={{ gap: hp(1) }}>
            <Gender
              setGenderError={setErrors}
              setGender={setGender}
              errorGender={errors.gender}
            />

            <Text style={{ ...styles.label, ...styles.errorLabel }}>
              {errors.gender ? "You must choose your gender" : null}
            </Text>
          </View>
          <View style={{ gap: hp(0.5) }}>
            <Text style={styles.label}>Nom</Text>

            <TextInput
              mode="outlined"
              // label="Name"
              placeholder="Entrez Votre Nom"
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
            <Text style={styles.label}>Niveau </Text>
            <DropDown addGrade={addGrade} setGradeError={setErrors} />

            <Text style={{ ...styles.label, ...styles.errorLabel }}>
              {errors.grade ? "You must choose your grade" : null}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#7c3aed",
            borderBottomWidth: hp(0.7),
            borderColor: "#7034d5",
            paddingVertical: hp(2),
            borderRadius: hp(3),
          }}
          onPress={submitHandler}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: hp(2.2),
              fontWeight: "bold",
            }}
          >
            C'est Partie
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  form: {
    display: "flex",
  },

  label: {
    fontSize: hp(2.1),
    color: "#5b21b6",
  },

  error: {
    borderColor: "red",
  },

  errorLabel: {
    color: "red",
  },
});
