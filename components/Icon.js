import React from "react";

import { TouchableOpacity } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

const Icon = ({ pack, onPress, iconName, iconSize, iconColor }) => {
  const iconPackages = {
    evilIcons: <EvilIcons name={iconName} size={iconSize} color={iconColor} />,
    ionIcons: <Ionicons name={iconName} size={iconSize} color={iconColor} />,
  };
  return (
    <TouchableOpacity onPress={onPress}>{iconPackages[pack]}</TouchableOpacity>
  );
};

export default Icon;
