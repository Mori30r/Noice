import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { addNoiceAction } from "../store/actions/noiceActions";
const AddScreen = (props) => {
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
