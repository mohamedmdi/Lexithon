import { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import boy from "../../assets/boy.png";
import girl from "../../assets/girl.png";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

const genders = ["male", "female"];

const OneGender = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={
        props.highlighted === props.gender
          ? { ...styles.imgFrame, ...styles.active }
          : styles.imgFrame
      }
    >
      <Image
        source={props.gender === "male" ? boy : girl}
        style={{
          width: 50,
          height: 50,
        }}
      ></Image>
    </TouchableOpacity>
  );
};

const Gender = (props) => {
  // const [gender, setGender] = useState(null);
  const [highlighted, setHighlighted] = useState(props.gender || null);

  const changeGenderHandler = (val) => {
    return () => {
      // setGender(val);
      props.setGender(val);
      setHighlighted(val);
    };
  };
  useEffect(() => {
    setHighlighted(props.gender);
  }, [props.gender]);


  return (
    <View style={styles.genderContainer}>
      {genders.map((el, i) => (
        <OneGender
          key={i}
          gender={el}
          onPress={changeGenderHandler(el)}
          highlighted={highlighted}
        />
      ))}
    </View>
  );
};

export default Gender;

const styles = StyleSheet.create({
  genderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },

  imgFrame: {
    padding: 15,
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 10,
  },

  active: {
    backgroundColor: "rgba(124, 58, 237, 0.7)",
  },
});
