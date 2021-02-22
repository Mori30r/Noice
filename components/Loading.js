import React from "react";

import { Text, View, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Loading;
