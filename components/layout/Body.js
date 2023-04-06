import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

export const Body = (props) => {
  return (
    <>
      <StatusBar
        backgroundColor={props.statusBarColor}
        barStyle="dark-content"
      />
      <View style={props.container}>
        <View style={{ ...styles.main, ...props.style }}>{props.children}</View>
      </View>
    </>
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
  },

  main: {
    display: "flex",
    gap: 20,
    paddingVertical: 25,
    paddingHorizontal: 12,
    backgroundColor: "#f5f3ff",
  },
});
