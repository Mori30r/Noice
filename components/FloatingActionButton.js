import React from "react";

import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Icon from "./Icon";

const FloatingActionButton = () => {
  return (
    <View style={styles.floatingActionButton}>
      <TouchableOpacity>
        <Icon
          pack="ionIcons"
          iconColor="white"
          iconName="add"
          iconSize={35}
          onPress={() => {}}
        />
      </TouchableOpacity>
    </View>
  );
};
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  floatingActionButton: {
    zIndex: 1,
    elevation: 10,
    position: "absolute",
    bottom: height / 10,
    right: width / 20,
    backgroundColor: "violet",
    width: width / 8,
    height: width / 8,
    borderRadius: width / 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FloatingActionButton;
