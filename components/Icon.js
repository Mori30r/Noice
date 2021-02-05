import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const Icon = ({ onPress, iconName, iconSize, iconColor }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <EvilIcons name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Icon;
