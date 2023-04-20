import React from "react";
import { ActivityIndicator } from "react-native-paper";
import Body from "./Body";

const LoadingContent = () => {
  return (
    <Body style={{ justifyContent: "center" }}>
      <ActivityIndicator animating={true} color="#7c3aed" size="large" />
    </Body>
  );
};

export default LoadingContent;
