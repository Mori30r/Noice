import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  ToastAndroid,
} from "react-native";
import Circle from "../components/Circle";
import ProgressBar from "../components/ProgressBar";
import Card from "../components/Card";
import Icon from "../components/Icon";
import FloatingActionButton from "../components/FloatingActionButton";
import { useSelector } from "react-redux";

const HomeScreen = (props) => {
  const noices = useSelector((state) => state.noice.noices);
  const showSuccessfulToast = () => {
    ToastAndroid.show("Your New Noice Added Successfully !", ToastAndroid.LONG);
  };
  return (
    <View style={styles.container}>
      <FloatingActionButton onPress={() => props.navigation.navigate("add")} />
      <Circle />
      <View style={styles.header}>
        <View style={styles.iconsContainer}>
          <Icon
            iconName="gear"
            pack="evilIcons"
            iconSize={30}
            iconColor="white"
            onPress={() => {}}
          />
          <Icon
            iconName="search"
            pack="evilIcons"
            iconSize={30}
            iconColor="white"
            onPress={() => {
              props.navigation.navigate("search");
            }}
          />
        </View>
        <View style={styles.nav}>
          <Text style={styles.headerText}>All Noices 😁</Text>
          <View style={styles.progressBarContainer}>
            <Text style={styles.smallText}>
              You Have {noices.length} Noices
            </Text>
            <ProgressBar />
          </View>
        </View>
      </View>
      {props.route.params && showSuccessfulToast()}
      <FlatList
        style={styles.cardContainer}
        data={noices}
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
  progressBarContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
