import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import { Audio } from "expo-av";
import { addNoiceAction } from "../store/actions/noiceActions";
const AddScreen = (props) => {
  const [record, setRecord] = useState(undefined);
  const [audioUri, setAudioUri] = useState(undefined);
  const [sound, setSound] = useState(undefined);
  const startAudioRecord = async () => {
    try {
      await Audio.requestPermissionsAsync();
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      // recording.setOnRecordingStatusUpdate((s) =>
      //   console.log("hey this is status ", s)
      // );
      await recording.startAsync();
      setRecord(recording);
      await recording.getStatusAsync();
    } catch (e) {
      console.log("Failed To Start Recording ", e);
    }
  };
  const stopAudioRecord = async () => {
    setRecord(undefined);
    await record.stopAndUnloadAsync();
    const newAudioUri = record.getURI();
    setAudioUri(newAudioUri);
  };
  const playRecordedAudio = async () => {
    if (audioUri) {
      try {
        const newSound = new Audio.Sound();
        await newSound.loadAsync({ uri: audioUri });
        await newSound.playAsync();
        await newSound.getStatusAsync().then((s) => console.log(s));
        setSound(sound);
      } catch (e) {
        console.log(e);
      }
    }
  };
  const dispatch = useDispatch();
  const [title, setTitle] = useState(null);
  const [note, setNote] = useState(null);
  const [error, setError] = useState(false);
  const handleSave = () => {
    if (title) {
      setError(false);
      dispatch(
        addNoiceAction({
          title,
          note,
        })
      );
      setTitle(null);
      setNote(null);
      props.navigation.push("home", { added: true });
    } else {
      setError(true);
    }
  };

  // to unload sound for moving between screens
  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);

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
            <View style={styles.voiceFreq} />
          </View>
        </View>
        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity
            style={styles.bottomButtonTouchable}
            onPress={() => props.navigation.goBack()}
          >
            <Text style={styles.bottomButton}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButtonTouchable}>
            <View style={styles.bottomRecordButton} />
          </TouchableOpacity>
          <Button
            title={record ? "stop" : "start"}
            onPress={record ? stopAudioRecord : startAudioRecord}
          />
          {audioUri && <Button title={"Play"} onPress={playRecordedAudio} />}
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
    height: height / 6,
    borderRadius: 10,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  voiceFreq: {
    width: width / 1.5,
    height: 1,
    backgroundColor: "black",
  },
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
    borderColor: "black",
    borderWidth: 0.5,
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
