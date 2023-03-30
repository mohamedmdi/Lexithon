import { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch } from "react-redux";
import { addGrade } from "../../store/userSlice";

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Grade 1", value: "1" },
    { label: "Grade 2", value: "2" },
    { label: "Grade 2", value: "3" },

    { label: "Grade 2", value: "4" },

    { label: "Grade 2", value: "5" },

    { label: "Grade 2", value: "6" },
  ]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!value) return;

    dispatch(addGrade(value));
  }, [value]);

  return (
    <DropDownPicker
      placeholder="Select Your Grade"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
};

export default DropDown;
