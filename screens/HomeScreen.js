import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
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
          <Text style={styles.smallText}>9/20 Of Noices Are Done !</Text>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBarFull} />
          </View>
        </View>
      </View>
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
    height: height / 3.5,
    borderBottomLeftRadius: width / 10,
    borderBottomRightRadius: width / 10,
    justifyContent: "space-around",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: "5%",
    minHeight: "8%",
  },
  iconHeader: {},
  circle: {
    width: width,
    height: width,
    borderRadius: width / 2,
    backgroundColor: "#ffffff",
    position: "absolute",
    top: height / 1.5,
    left: width / 2.3,
    opacity: 0.2,
  },
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
  progressBarContainer: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 0.2,
    marginBottom: 20,
    width: width / 2,
    backgroundColor: "#ffffff",
  },
  progressBarFull: {
    width: "50%",
    height: 8,
    backgroundColor: "green",
    borderRadius: 10,
  },
  smallText: {
    fontSize: 15,
    fontWeight: "200",
    color: "white",
  },
});

export default HomeScreen;
