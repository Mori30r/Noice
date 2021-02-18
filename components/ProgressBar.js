import React from "react";

import { View, StyleSheet, Dimensions } from "react-native";

const ProgressBar = ({ length, isDone }) => {
  const fullPercentageOfProgressBar = (isDone * 100) / length;
  return (
    <View style={styles.progressBarContainer}>
      <View
        style={[
          styles.progressBarFull,
          { width: `${fullPercentageOfProgressBar}%` },
        ]}
      />
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
    height: 8,
    backgroundColor: "green",
    borderRadius: 10,
  },
});

export default ProgressBar;
