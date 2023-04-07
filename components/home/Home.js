import { View, StyleSheet, Platform } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import useBackHandler from "../../hooks/useBackHandler";
import Body from "../layout/Body";
import { addUser } from "../../store/userSlice";
import getData from "../../utils/getData";
import LoadingContent from "../layout/LoadingContent";
import Content from "./Content";
import { useFocusEffect } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";


const Home = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const notif = useSelector((state) => state.notif);

  // Reusable hook for backhandler feature!
  useBackHandler();
  useEffect(() => {
    dispatch(loadDataFromStorage());
  }, []);


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
        {!user.username ? (
          <LoadingContent />
        ) : (
          <>
            <Content user={user} />
          </>
        )}
        {/* <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      /> */}
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
