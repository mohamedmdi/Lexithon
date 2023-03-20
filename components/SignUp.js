import React, { useEffect, useState } from "react";
// prettier-ignore
import { StyleSheet, Text, View, ImageBackground, StatusBar } from "react-native";
import { TextInput, Button } from "react-native-paper";
import DropDown from "./DropDown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

const storeData = async (value) => {
  try {
    const jsonv = JSON.stringify(value);
    await AsyncStorage.setItem("user", jsonv);
  } catch (e) {
    // saving error
    console.error(e);
  }
};

const SignUp = (props) => {
  const [text, setText] = useState("")
  const {grade, achievements} = useSelector(state => state.user)

  const submitHandler = async () => {
    // await AsyncStorage.clear()
    await storeData({username: text, grade, achievements});
    
    // Go Next Page After Creating an acc!
    props.navigation.navigate("home");
  };
  return (
    <>

      <StatusBar backgroundColor="#f5f3ff" barStyle="dark-content" />
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
      <View style={styles.container}>
        <Text style={styles.h1}>Welcome To The Game</Text>
        <View style={styles.form}>
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
        <Text>{text}</Text>
      </View>
    </>
  );
};

export default SignUp;

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
