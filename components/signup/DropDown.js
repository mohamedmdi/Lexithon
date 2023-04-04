import { useEffect, useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";

const DropDown = (props) => {
  const [value, setValue] = useState(null);
  const items = [
    { key: 1, value: "Grade 1" },
    { key: 2, value: "Grade 2" },
    { key: 3, value: "Grade 3" },
    { key: 4, value: "Grade 4" },
    { key: 5, value: "Grade 5" },
    { key: 6, value: "Grade 6" },
  ];

  useEffect(() => {
    if (!value) return;

    props.addGrade(value);
  }, [value]);

  return (
    <SelectList
      setSelected={(val) => setValue(val)}
      data={items}
      search={false}
      placeholder="Selec Your Grade"
      defaultOption={items.find((el) => el.key === props.val) || null}
    />
    // <DropDownPicker
    //   placeholder="Select Your Grade"
    //   open={open}
    //   value={value || props.val}
    //   items={items}
    //   setOpen={setOpen}
    //   setValue={setValue}
    //   setItems={setItems}
    // />
  );
};

export default DropDown;
