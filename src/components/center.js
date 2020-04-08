import React from "react";
import { StyleSheet, View } from "react-native";

export const Center = ({ children, style }) => {
  return <View style={{ ...styles.center, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  center: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
    backgroundColor: "transparent",
  },
});
