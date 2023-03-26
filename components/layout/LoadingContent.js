import React from "react";
import { ActivityIndicator } from "react-native-paper";

const LoadingContent = () => {
  return <ActivityIndicator animating={true} color="#7c3aed" size="large" />;
};

export default LoadingContent;
