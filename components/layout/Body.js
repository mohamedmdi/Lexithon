import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

export const Body = (props) => {
  return (
    <>
      <StatusBar
        backgroundColor={props.statusBarColor}
        barStyle="dark-content"
      />
      <View style={props.container || styles.container}>{props.children}</View>
    </>
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 50,
    color: "#fff",
    backgroundColor: "#f5f3ff",
  },
});
