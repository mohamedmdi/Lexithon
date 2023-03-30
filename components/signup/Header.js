import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.imgContainer}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHNjaG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        }}
        style={{
          resizeMode: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  imgContainer: {
    width: "auto",
    height: 225,
    overflow: "hidden",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});
