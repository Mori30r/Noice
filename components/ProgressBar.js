import React from "react";

import { View, StyleSheet, Dimensions } from "react-native";

const ProgressBar = () => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBarFull} />
    </View>
  );
};
const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  progressBarContainer: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 0.2,
    marginBottom: 20,
    width: width / 2,
    backgroundColor: "#ffffff",
  },
  progressBarFull: {
    width: "50%",
    height: 8,
    backgroundColor: "green",
    borderRadius: 10,
  },
});

export default ProgressBar;
