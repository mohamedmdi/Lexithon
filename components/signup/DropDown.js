import { useEffect, useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";

const DropDown = (props) => {
  const [value, setValue] = useState(null);
  const items = [
    { key: 1, value: "1ère année primaire" },
    { key: 2, value: "indisponible", disabled: true },
    { key: 3, value: "indisponible", disabled: true },
    { key: 4, value: "indisponible", disabled: true },
    { key: 5, value: "indisponible", disabled: true },
    { key: 6, value: "indisponible", disabled: true },
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
      placeholder={props.val || "Sélectionnez Votre Niveau"}
      boxStyles={{ backgroundColor: "white" }}
      dropdownStyles={{ backgroundColor: "white" }}
    />
  );
};

export default DropDown;
