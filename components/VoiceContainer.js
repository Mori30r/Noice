import React, { useState } from "react";

import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

const VoiceContainer = ({ onPress, seconds, position, isFinished }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  // const [sliderValue, setSliderValue] = useState(0);
  return (
    <View style={styles.VoiceContainer}>
      <TouchableOpacity
        onPress={() => {
          onPress();
          setIsPlaying(!isPlaying);
        }}
      >
        <Ionicons
          name={isPlaying ? "pause-circle" : "play-circle"}
          color="#000000"
          size={40}
        />
      </TouchableOpacity>
      <Slider
        value={isFinished ? 0 : position}
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
