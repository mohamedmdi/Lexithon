import { ScrollView, Text } from "react-native";
import Body from "../components/layout/Body";
import Setting from "../components/setting/Setting";

const SettingPage = () => {
  return (
    <Body
      style={{ backgroundColor: "#2e1065" }}
      statusBarColor="#2e1065"
      barStyle={"light-content"}
    >
      <ScrollView>
        <Setting></Setting>
      </ScrollView>
    </Body>
  );
};

export default SettingPage;
