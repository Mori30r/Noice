import React from "react";

import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
  Text,
} from "react-native";
import * as noice from "../data/dummy-noice.json";
import Card from "../components/Card";
const noiceList = noice["noices"];
const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.searchInput} placeholder="Search..." />
      </View>
      <View style={styles.sortContainer}>
        <Text style={styles.sortText}>Important</Text>
        <Text style={styles.sortText}>Done</Text>
        <Text style={styles.sortTextActive}>Recently</Text>
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
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    padding: 10,
    borderWidth: 1,
    margin: 20,
    borderRadius: 5,
  },
  searchInput: {},
  cardContainer: {
    marginBottom: height / 4.7,
  },
  sortContainer: {
    flexDirection: "row",
    backgroundColor: "grey",
    height: height / 12,
    marginHorizontal: width / 10,
    borderRadius: 50,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  sortText: {
    fontSize: 15,
  },
  sortTextActive: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default SearchScreen;
