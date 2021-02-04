import React, { useState } from "react";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import * as noices from "../data/dummy-noice.json";
import Slider from "@react-native-community/slider";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  TouchableNativeFeedback,
} from "react-native";
import Circle from "../components/Circle";
import ProgressBar from "../components/ProgressBar";
const HomeScreen = () => {
  const noiceList = noices["noices"];
  return (
    <View style={styles.container}>
      <Circle />
      <View style={styles.header}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <EvilIcons name="gear" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <EvilIcons name="search" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.nav}>
          <Text style={styles.headerText}>All Noices 😁</Text>
          <View style={styles.progressBarContainer}>
            <Text style={styles.smallText}>
              You Have {noiceList.length} Noices
            </Text>
            <ProgressBar />
          </View>
        </View>
      </View>
      <FlatList
        style={styles.cardContainer}
        data={noiceList}
        renderItem={(noice) => {
          return (
            <View style={styles.card}>
              <View style={styles.cardDetailContainer}>
                <Text style={styles.cardTitle}>{noice.item.title}</Text>
                <Text style={styles.cardNote}>{noice.item.note}</Text>
                <View style={styles.cardEnd}>
                  <View style={styles.VoiceContainer}>
                    <TouchableOpacity>
                      <Ionicons name="play-circle" color="#000000" size={30} />
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
        }}
      />
    </View>
  );
};

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: "#001341",
  },
  header: {
    backgroundColor: "#a68eff",
    height: height / 4,
    borderBottomLeftRadius: width / 20,
    borderBottomRightRadius: width / 20,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: "5%",
    minHeight: "8%",
  },
  iconHeader: {},
  nav: {
    flex: 1,
    paddingHorizontal: width / 20,
    paddingTop: 30,
    paddingLeft: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },

  smallText: {
    fontSize: 15,
    fontWeight: "200",
    color: "white",
    paddingBottom: 10,
  },
  main: {},
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
  cardContainer: {
    flex: 1,
    marginBottom: height / 17,
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

export default HomeScreen;
