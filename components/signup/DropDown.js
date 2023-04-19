import { useEffect, useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";

const DropDown = (props) => {
  const [value, setValue] = useState(null);
  const items = [
    { key: 1, value: "Grade 1" },
    { key: 2, value: "Grade 2", disabled: true },
    { key: 3, value: "Grade 3", disabled: true },
    { key: 4, value: "Grade 4", disabled: true },
    { key: 5, value: "Grade 5", disabled: true },
    { key: 6, value: "Grade 6", disabled: true },
  ];

  useEffect(() => {
    if (!value) return;

    props.addGrade(value);
    console.log(Boolean(props.setGradeError));
    Boolean(props.setGradeError) &&
      props.setGradeError((prev) => ({ ...prev, grade: false }));
  }, [value]);

  return (
    <SelectList
      setSelected={(val) => setValue(val)}
      data={items}
      search={false}
      save="value"
      placeholder={props.val || "Select Grade"}
      boxStyles={{ backgroundColor: "white" }}
      dropdownStyles={{ backgroundColor: "white" }}
    />
  );
};

export default DropDown;
