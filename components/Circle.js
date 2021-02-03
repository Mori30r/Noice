import React from "react";

import { View, StyleSheet, Dimensions } from "react-native";

const Circle = () => {
  return <View style={styles.circle} />;
};

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  circle: {
    width: width,
    height: width,
    borderRadius: width / 2,
    backgroundColor: "#ffffff",
    position: "absolute",
    top: height / 1.5,
    left: width / 2.3,
    opacity: 0.2,
  },
});

export default Circle;
