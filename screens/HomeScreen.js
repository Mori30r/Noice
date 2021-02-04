import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import * as noices from "../data/dummy-noice.json";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Circle from "../components/Circle";
import ProgressBar from "../components/ProgressBar";
import Card from "../components/Card";
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
          return <Card noice={noice} />;
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
    elevation: 10,
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
  cardContainer: {
    flex: 1,
    marginBottom: height / 17,
  },
});

export default HomeScreen;
