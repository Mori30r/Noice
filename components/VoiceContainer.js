import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

const VoiceContainer = ({ onPress, seconds, position, id }) => {
  const voiceOption = useSelector((state) => state.voiceOption.voiceOption);
  return (
    <View style={styles.VoiceContainer}>
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
      >
        <Ionicons
          name={
            id === voiceOption.id && position ? "pause-circle" : "play-circle"
          }
          color="#000000"
          size={40}
        />
      </TouchableOpacity>
      <Slider
        // position ? position : 0
        value={id === voiceOption.id || "add-screen" ? position : 0}
        // onValueChange={(value) => setSliderValue(value)}
        style={styles.voiceSlider}
        minimumValue={0}
        maximumValue={seconds ? seconds : 1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="#000000"
      />
    </View>
  );
};
const { width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  VoiceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  voiceSlider: {
    width: width / 1.5,
  },
});

export default VoiceContainer;
