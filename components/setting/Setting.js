import { ScrollView, StyleSheet, Text, View } from "react-native";
import Body from "../../components/layout/Body";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/setting/NavBar";
import { Divider } from "@rneui/base";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import Avatar from "../../components/home/Avatar";
import DropDown from "../../components/signup/DropDown";
import { TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Profile from "../../components/setting/Profile";
import { addUser } from "../../store/userSlice";
import Gender from "../../components/signup/Gender";
import Achievements from "../../components/setting/Achievements";
import DangerZone from "../../components/setting/DangerZone";
import storeData from "../../utils/storeData";

const Setting = () => {
  const user = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [gender, setGender] = useState(null);
  const [grade, setGrade] = useState(null);
  const { trophy } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    setName(user.username);
    setGender(user.gender);
    setGrade(user.grade);
  }, [user]);

  const handleSave = async () => {
    if (!name) return;
    {
      dispatch(addUser({ username: name, grade: grade, gender: gender }));
      await storeData({
        username: name,
        grade: grade,
        trophy: trophy,
        gender: gender,
      });
    }
  };
  return (
    <Body>
      <NavBar handleSave={handleSave} />
      <ScrollView>
        {/* <Setting></Setting> */}
        <Divider style={{ marginBottom: 30 }} />
        <Profile></Profile>
        <View style={styles.form}>
          <TextInput
            label="User Name"
            variant="outlined"
            leading={(props) => (
              <Icon name="account" {...props} onChangeText={setName} />
            )}
            value={name}
            onChangeText={setName}
          />
          <DropDown val={grade} setGrade={setGrade} />
          <Gender gender={gender} setGender={setGender} />
        </View>
        <Divider style={{ marginBottom: 30 }} />
        <Achievements />
      </ScrollView>
    </Body>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
    gap: 15,
  },
});

export default Setting;
