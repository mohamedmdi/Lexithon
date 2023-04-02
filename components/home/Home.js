import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import useBackHandler from "../../hooks/useBackHandler";
import Body from "../layout/Body";
import { addUser, clearUser } from "../../store/userSlice";
import getData from "../../util/getData";
import LoadingContent from "../layout/LoadingContent";
import Content from "./Content";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Text } from "react-native-paper";
import Subject from "./Subject";
import { Button } from "@rneui/base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Home = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // Reusable hook for backhandler feature!
  useBackHandler();

  useFocusEffect(() => {
    if (user.username) return;
    (async () => {
      const data = await getData();
      console.log("Home: ", data);
      dispatch(addUser({ ...data }));
    })();
  });

  return (
    <Body statusBarColor="#f5f3ff">
      <View style={styles.main}>
        {!user.username ? <LoadingContent /> : <Content user={user} />}
        {/* <Content user={user}></Content> */}
      </View>
    </Body>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    display: "flex",
    height: "100%",
    gap: 20,
    paddingVertical: hp("1%"),
  },
});
