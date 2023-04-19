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
          : props.error
          ? { ...styles.imgFrame, borderColor: "red" }
          : { ...styles.imgFrame }
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
  const [highlighted, setHighlighted] = useState(props.gender || null);

  const changeGenderHandler = (val) => {
    return () => {
      props.setGender(val);
      props.setGenderError(prev => ({ ...prev, gender: false }))
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
          error={props.errorGender}
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
    borderWidth: 1,
    borderRadius: 1000,
  },

  active: {
    backgroundColor: "rgba(124, 58, 237, 0.7)",
  },
});
