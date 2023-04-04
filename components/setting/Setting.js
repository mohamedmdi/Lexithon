import { StyleSheet } from "react-native";
import { Divider } from "@rneui/themed";
import NavBar from "./NavBar";
import Profile from "./Profile";
import EditForm from "./EditForm";
import DangerZone from "./DangerZone";
import Achievements from "./Achievements";

const Setting = () => {
  return (
    <>
      <NavBar />
      <Divider style={{ marginBottom: 30 }} />
      <Profile />
      <EditForm />
      <Divider style={{ marginBottom: 30 }} />
      <Achievements />
      <Divider style={{ marginBottom: 30 }} />
      <DangerZone />
    </>
  );
};

export default Setting;
