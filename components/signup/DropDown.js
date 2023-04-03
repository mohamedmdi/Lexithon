import { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch } from "react-redux";

const DropDown = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Grade 1", value: 1 },
    { label: "Grade 2", value: 2 },
    { label: "Grade 3", value: 3 },
    { label: "Grade 4", value: 4 },
    { label: "Grade 5", value: 5 },
    { label: "Grade 6", value: 6 },
  ]);

  useEffect(() => {
    if (!value) return;

    props.addGrade(value);
  }, [value]);

  return (
    <DropDownPicker
      placeholder="Select Your Grade"
      open={open}
      value={value || props.val}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
};

export default DropDown;
