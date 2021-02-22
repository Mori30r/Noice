import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import VoiceContainer from "./VoiceContainer";
import { playRecordedAudio } from "../helpers/audio/playRecordedAudio";
import { setVoiceID } from "../store/actions/voiceOptionActions";
import {
  removeNoiceAction,
  toggleFavoriteAction,
} from "../store/actions/noiceActions";
import Icon from "./Icon";

const Card = ({ noice }) => {
  const dispatch = useDispatch();

  const handleOnPressFavorite = async () => {
    await dispatch(toggleFavoriteAction(noice.item.id, noice.item.isFavorite));
  };

  const handleOnPressPlay = async () => {
    await dispatch(setVoiceID(noice.item.id));
    playRecordedAudio(noice.item.audioUri, dispatch);
  };

  const voiceOption = useSelector((state) => state.voiceOption.voiceOption);

  return (
    <View style={styles.cardContainer}>
      <Icon
        pack={"ionIcons"}
        iconName={"trash-outline"}
        iconColor={"red"}
        iconSize={25}
        onPress={() => dispatch(removeNoiceAction(noice.item.id))}
      />
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
            <Icon
              onPress={handleOnPressFavorite}
              iconSize={20}
              iconColor={"#000000"}
              iconName={noice.item.isFavorite ? "star" : "star-outline"}
              pack={"ionIcons"}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  cardContainer: {
    padding: width / 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  trashIcon: {},
  card: {
    backgroundColor: "#058578",
    height: "auto",
    marginLeft: width / 50,
    marginVertical: height / 60,
    borderTopEndRadius: 60,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 10,
    padding: 10,
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
