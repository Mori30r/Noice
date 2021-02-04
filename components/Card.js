import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

const Card = ({ noice }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardDetailContainer}>
        <Text style={styles.cardTitle}>{noice.item.title}</Text>
        <Text style={styles.cardNote}>{noice.item.note}</Text>
        <View style={styles.cardEnd}>
          <View style={styles.VoiceContainer}>
            <TouchableOpacity>
              <Ionicons name="play-circle" color="#000000" size={40} />
            </TouchableOpacity>
            <Slider
              style={styles.voiceSlider}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              thumbTintColor="#000000"
            />
          </View>
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
  VoiceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  voiceSlider: {
    width: width / 1.5,
  },
  favoriteIcon: {},
  progressBarContainer: {
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Card;
