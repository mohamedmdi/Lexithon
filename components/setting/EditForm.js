import { useState } from "react";
import { useSelector } from "react-redux";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import DropDown from "../signup/DropDown";
import Gender from "../signup/Gender";
import { StyleSheet } from "react-native";
import { useEffect } from "react";
import { editUsername, editGender, editGrade } from "../../store/userSlice";
import { useDispatch } from "react-redux";

const EditForm = (props) => {
  const { gender, grade, username } = useSelector((state) => state.user);
  const [text, setText] = useState(username);
  const [newGender, setNewGender] = useState(null);
  const [newGrade, setNewGrade] = useState(null);
  const dispatch = useDispatch();

  const addGender = (val) => setNewGender(val);
  const addGrade = (val) => setNewGrade(val);

  useEffect(() => {
    dispatch(editGrade(newGrade));
  }, [newGrade]);

  useEffect(() => {
    dispatch(editUsername(text));
  }, [text]);

  useEffect(() => {
    dispatch(editGender(newGender));
  }, [newGender]);

  return (
    <View style={styles.form}>
      <Text style={styles.subHeader}>Edit Profile Info</Text>
      <View style={{ gap: 20 }}>
        <TextInput
          mode="outlined"
          label="Name"
          placeholder="Your Name"
          onChangeText={setText}
          value={text}
        />
        <DropDown val={grade} addGrade={addGrade} />
        <Gender gender={gender} addGender={addGender} />
      </View>
    </View>
  );
};

export default EditForm;

const styles = StyleSheet.create({
  form: {
    marginBottom: 40,
    gap: 15,
  },

  subHeader: {
    fontSize: 17,
    color: "#495057",
    fontWeight: "500",
    letterSpacing: 0.8,
  },
});
