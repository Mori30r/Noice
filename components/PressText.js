import React from "react";

import { Text, StyleSheet } from "react-native";

const PressText = ({ isActive, onPress, children }) => {
  return (
    <Text
      onPress={onPress}
      style={isActive ? styles.sortTextActive : styles.sortText}
    >
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  sortText: {
    fontSize: 15,
  },
  sortTextActive: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default PressText;
