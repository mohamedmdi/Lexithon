import { useCallback, useEffect, useState } from "react";
import { Keyboard, ScrollView, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch } from "react-redux";
import { addGrade } from "../../store/userSlice";
import { Image } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useFocusEffect } from "@react-navigation/native";
// import { Dropdown } from 'react-native-material-dropdown';

const DropDown = (props) => {
  // const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   { label: "1 ère Primaire", value: "1" },
  //   { label: "2 ème Primaire", value: "2" },
  //   { label: "3 ème Primaire", value: "3" },
  //   { label: "4 ème Primaire", value: "4" },
  //   { label: "5 ème Primaire", value: "5" },
  //   { label: "6 ème Primaire", value: "6" },
  // ]);
  const data = [
    { key: "1", value: "1 ère Primaire" },
    { key: "2", value: "2 ème Primaire" },
    { key: "3", value: "3 ème Primaire" },
    { key: "4", value: "4 ème Primaire" },
    { key: "5", value: "5 ème Primaire" },
    { key: "6", value: "6 ème Primaire" },
  ];
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      if (!value) return;
      if (props.addGrade) props.addGrade(value);
      if (props.setGrade) props.setGrade(value);
    }, [value])
  );

  return (
    <SelectList
      setSelected={(val) => setValue(val)}
      placeholder={props.val || "Select Grade"}
      data={data}
      save="value"
      search={false}
      boxStyles={{ backgroundColor: "white" }}
      dropdownStyles={{ backgroundColor: "white" }}
    />
    // <DropDownPicker
    //   placeholder="Select Your Grade"
    //   open={open}
    //   value={value}
    //   items={items}
    //   setOpen={setOpen}
    //   setValue={setValue}
    //   setItems={setItems}
    //   onPress={() => {
    //     Keyboard.dismiss();
    //   }}
    // />
  );
};

export default DropDown;
