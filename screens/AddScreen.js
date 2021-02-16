import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { addNoiceAction } from "../store/actions/noiceActions";
import { recordAudio } from "../helpers/audio/recordAudio";
import { stopAudioRecord } from "../helpers/audio/stopRecordAudio";
import VoiceContainer from "../components/VoiceContainer";
import { playRecordedAudio } from "../helpers/audio/playRecordedAudio";
import { convertMilliSecondsToTime } from "../helpers/functions/convertMilliToTime";
import { v4 as uuid } from "uuid";
import { voiceOptionInit } from "../store/actions/voiceOptionActions";

const AddScreen = (props) => {
  const dispatch = useDispatch();
  const voiceOption = useSelector((state) => state.voiceOption.voiceOption);
  const [title, setTitle] = useState(null);
  const [note, setNote] = useState(null);
  const [error, setError] = useState(false);
  const [audioUri, setAudioUri] = useState(null);
  const [voiceDuration, setVoiceDuration] = useState(null);
  useEffect(() => {
    setAudioUri(voiceOption.audioUri);
    setVoiceDuration(voiceOption.timeOfVoice);
  }, [voiceOption]);
  const handleSave = () => {
    if (title) {
      setError(false);
      dispatch(addNoiceAction(uuid(), title, note, audioUri, voiceDuration));
      setTitle(null);
      setNote(null);
      dispatch(voiceOptionInit());
      props.navigation.push("home", { added: true });
    } else {
      setError(true);
    }
  };
  // // to unload sound for moving between screens
  // const unloadSound = async () => {
  //   voiceOption.sound && (await voiceOption.sound.unloadAsync());
  // };
  // useEffect(() => {
  //   unloadSound();
  // }, [voiceOption.sound]);
  return (
    <View style={styles.container}>
      <View style={styles.twoInputsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.InputLabel}>Title</Text>
          <TextInput
            value={title}
            onChangeText={(value) => setTitle(value)}
            maxLength={40}
            placeholder="Enter Your Title"
            style={[styles.titleInput, error && { borderColor: "red" }]}
          />
          {error && <Text style={styles.errorText}>Title Is Required</Text>}
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.InputLabel}>Descriptions</Text>
          <View style={styles.descriptionInputContainer}>
            <TextInput
              value={note}
              onChangeText={(value) => setNote(value)}
              multiline
              numberOfLines={20}
              textAlignVertical="top"
              placeholder="Enter Your Description"
              style={styles.descriptionInput}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <View style={styles.voiceSection}>
          <View style={styles.voiceContainer}>
            <View style={styles.voiceFreq}>
              {voiceOption.isRecorded && (
                <VoiceContainer
                  position={voiceOption.voicePosition}
                  seconds={voiceOption.timeOfVoice}
                  onPress={() =>
                    playRecordedAudio(voiceOption.audioUri, dispatch)
                  }
                />
              )}
              <Text>
                {voiceOption.timeOfVoice
                  ? convertMilliSecondsToTime(voiceOption.timeOfVoice)
                  : "Press Record Button To Start !"}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity
            style={styles.bottomButtonTouchable}
            onPress={() => props.navigation.goBack()}
          >
            <Text style={styles.bottomButton}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              voiceOption.recordInstance
                ? stopAudioRecord(dispatch, voiceOption.recordInstance)
                : recordAudio(dispatch)
            }
            style={styles.bottomButtonTouchable}
          >
            {voiceOption.recordInstance ? (
              <View style={styles.bottomStopRecordButton} />
            ) : (
              <View style={styles.bottomRecordButton} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSave}
            style={styles.bottomButtonTouchable}
          >
            <Text style={styles.bottomButton}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    height: height,
    paddingVertical: height / 20,
    paddingHorizontal: width / 20,
  },
  twoInputsContainer: {
    justifyContent: "space-between",
    height: height / 2,
  },
  InputLabel: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: height / 100,
  },
  titleContainer: {
    justifyContent: "space-around",
  },
  titleInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    marginLeft: width / 50,
    padding: width / 100,
  },
  descriptionContainer: {
    marginTop: 20,
  },
  descriptionInput: {},
  descriptionInputContainer: {
    marginLeft: width / 50,
    padding: width / 100,
    borderWidth: 0.5,
    borderRadius: 5,
  },
  bottomNav: {
    flexDirection: "column",
    flex: 1,
    marginTop: height / 10,
    marginBottom: height / 40,
  },
  voiceContainer: {
    alignSelf: "center",
    width: width / 1.1,
    height: height / 8,
    borderRadius: 10,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  voiceFreq: {},
  bottomButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  bottomButton: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  bottomButtonTouchable: {
    alignSelf: "center",
  },
  bottomRecordButton: {
    width: width / 8,
    height: width / 8,
    borderRadius: width / 4,
    backgroundColor: "red",
  },
  bottomStopRecordButton: {
    width: width / 10,
    height: width / 10,
    backgroundColor: "red",
    borderRadius: 5,
  },
  voiceSection: {
    flex: 4,
    margin: 10,
  },
  errorText: {
    color: "red",
    paddingHorizontal: 5,
  },
});

export default AddScreen;
