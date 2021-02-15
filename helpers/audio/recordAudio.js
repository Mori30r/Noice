import React from "react";
import { Audio } from "expo-av";
import {
  recordInstanceAdd,
  setTimeOfVoice,
} from "../../store/actions/voiceOptionActions";

export const recordAudio = async (dispatch) => {
  try {
    await Audio.requestPermissionsAsync();
    const recording = new Audio.Recording();
    await recording.prepareToRecordAsync(
      Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
    );
    recording.setOnRecordingStatusUpdate((recordingStatus) => {
      dispatch(setTimeOfVoice(recordingStatus.durationMillis));
    });
    await recording.startAsync();
    dispatch(recordInstanceAdd(recording));
  } catch (e) {
    console.log(e);
  }
};
