import { ScrollView, Text } from "react-native";
import Body from "../components/layout/Body";
import Setting from "../components/setting/Setting";

const SettingPage = () => {
  return (
    <Body>
      <ScrollView>
        <Setting></Setting>
      </ScrollView>
    </Body>
  );
};

export default SettingPage;
