import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import VoiceContainer from "./VoiceContainer";
import { playRecordedAudio } from "../helpers/audio/playRecordedAudio";
import { getNoice } from "../helpers/database/noiceDatabase";
import { setVoiceID } from "../store/actions/voiceOptionActions";

const Card = ({ noice }) => {
  const dispatch = useDispatch();
  // const [currentNoice, setCurrentNoice] = useState(null);
  const handleOnPressPlay = async () => {
    const currentNoice = await getNoice(noice.item.id).then((r) => {
      return r.rows._array[0];
    });
    await dispatch(setVoiceID(currentNoice.id));
    playRecordedAudio(currentNoice.audioUri, dispatch);
  };
  const voiceOption = useSelector((state) => state.voiceOption.voiceOption);
  return (
    <View style={styles.card}>
      <View style={styles.cardDetailContainer}>
        <Text style={styles.cardTitle}>{noice.item.title}</Text>
        <Text style={styles.cardNote}>{noice.item.note}</Text>
        <View style={styles.cardEnd}>
          <VoiceContainer
            position={voiceOption.voicePosition}
            seconds={noice.item.voiceDuration}
            onPress={handleOnPressPlay}
            id={noice.item.id}
          />
          <TouchableOpacity style={styles.favoriteIcon}>
            <Ionicons name="star-outline" color="#000000" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#058578",
    height: "auto",
    marginHorizontal: width / 20,
    marginVertical: height / 60,
    borderTopEndRadius: 60,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 10,
    padding: 15,
  },
  cardDetailContainer: {
    justifyContent: "space-between",
  },
  cardTitle: {
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  cardNote: {
    fontSize: 15,
    paddingHorizontal: 5,
  },
  cardEnd: {
    paddingTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  favoriteIcon: {},
  progressBarContainer: {
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Card;
